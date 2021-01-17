import * as parser from 'fast-xml-parser';
import * as vscode from 'vscode';
import { IntelliJSyntaxAnalyzer } from './importer/IntelliJSyntaxAnalyzer';
import { IntelliJKeymapXML } from './importer/model/intellij/IntelliJKeymapXML';
import { OS, OSArray } from './importer/model/OS';
import { VSCodeKeybinding } from './importer/model/vscode/VSCodeKeybinding';

export function activate(context: vscode.ExtensionContext) {
    vscode.commands.registerCommand('IntelliJ/importFile', async function () {
        /*---------------------------------------------------------------------
         * Reader
         *-------------------------------------------------------------------*/
        const readerOptions: vscode.OpenDialogOptions = {
            canSelectFiles: true,
            filters: {
                XML: ['xml'],
            },
        };
        const readerUri = await vscode.window.showOpenDialog(readerOptions);
        if (!readerUri || !readerUri[0]) {
            return;
        }
        const readData = await vscode.workspace.fs.readFile(readerUri[0]);
        const readStr = Buffer.from(readData).toString('utf8');

        /*---------------------------------------------------------------------
         * Parser
         *-------------------------------------------------------------------*/
        const parserOptions: parser.X2jOptionsOptional = {
            ignoreAttributes: false,
            arrayMode: true,
        };
        let parsedIntellijKeymapsJson;
        try {
            parsedIntellijKeymapsJson = parser.parse(readStr, parserOptions);
        } catch (error) {
            console.error(error);
            vscode.window.showErrorMessage(
                'Cannot load this IntelliJ IDEA Keymap file. Plesase check the file format.'
            );
            return;
        }

        /*---------------------------------------------------------------------
         * Semantic Analyzer
         *-------------------------------------------------------------------*/
        if (!parsedIntellijKeymapsJson?.keymap) {
            vscode.window.showErrorMessage(
                'Cannot find any IntelliJ IDEA Keymap settings in this file. Make sure that the file is an XML file exported from IntelliJ Idea.'
            );
            await vscode.window.showTextDocument(readerUri[0]);
            return;
        }

        const osOptions: vscode.QuickPickOptions = {
            placeHolder: 'Which OS do you want to convert for?',
            ignoreFocusOut: true,
        };
        const os = (await vscode.window.showQuickPick(
            OSArray.map(x => x.toString()),
            osOptions
        )) as OS;
        if (!os) {
            return;
        }

        const vscodeKeybindings = new Array<VSCodeKeybinding>();
        const actionElements = parsedIntellijKeymapsJson.keymap[0].action;
        for (const actionIndex in actionElements) {
            const actionIdAttr = actionElements[actionIndex]['@_id'];
            const keystorkeElements = actionElements[actionIndex]['keyboard-shortcut'];

            for (const keystrokeIndex in keystorkeElements) {
                const keyboardShortcutElement = keystorkeElements[keystrokeIndex];
                const firstKeystrokeAttr = keyboardShortcutElement['@_first-keystroke'];
                const secondKeystrokeAttr = keyboardShortcutElement['@_second-keystroke'];
                const intellijKeymapCustom = new IntelliJKeymapXML(
                    actionIdAttr,
                    os,
                    firstKeystrokeAttr,
                    secondKeystrokeAttr
                );

                const vscodes = IntelliJSyntaxAnalyzer.convertToVSCode(os, intellijKeymapCustom);
                if (vscodes === IntelliJSyntaxAnalyzer.NO_MAPPING) {
                    continue;
                }
                vscodes.forEach(vscode => vscodeKeybindings.push(vscode));
            }

            {
                const intellijKeymapCustom = new IntelliJKeymapXML(actionIdAttr, os);
                const removeVcodes = IntelliJSyntaxAnalyzer.removeDefault(os, intellijKeymapCustom);
                if (removeVcodes === IntelliJSyntaxAnalyzer.NO_MAPPING) {
                    continue;
                }
                removeVcodes.forEach(remove => {
                    const duplicated = vscodeKeybindings.some(
                        // FIXME: high costs
                        add => add.command === remove.command && remove.key.endsWith(add.key)
                    );
                    if (!duplicated) {
                        vscodeKeybindings.push(remove);
                    }
                });
            }
        }

        /*---------------------------------------------------------------------
         * Code Generator
         *-------------------------------------------------------------------*/
        const generatedVSCodeKeybindingsJson = JSON.stringify(vscodeKeybindings, undefined, 4);

        /*---------------------------------------------------------------------
         * Writer
         *-------------------------------------------------------------------*/
        const defaultWriteUri = context.storageUri;
        const writerOptions: vscode.SaveDialogOptions = {
            defaultUri: defaultWriteUri,
            filters: {
                JSON: ['json'],
            },
        };
        const writerUri = await vscode.window.showSaveDialog(writerOptions);
        if (!writerUri) {
            return;
        }
        const writeData = Buffer.from(generatedVSCodeKeybindingsJson, 'utf8');
        await vscode.workspace.fs.writeFile(writerUri, writeData);

        await vscode.window.showTextDocument(writerUri);
    });
}
