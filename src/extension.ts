import * as vscode from 'vscode';
import { IntelliJKeymapXML } from './importer/model/intellij/implement/IntelliJKeymapXML';
import { OS } from './importer/model/OS';
import { ActionIdCommandMapping } from './importer/model/resource/ActionIdCommandMapping';
import { KeystrokeKeyMapping } from './importer/model/resource/KeystrokeKeyMapping';
import { VSCodeKeybinding } from './importer/model/vscode/VSCodeKeybinding';
import { ActionIdCommandMappingJsonParser } from './importer/parser/ActionIdCommandMappingJsonParser';
import { IntelliJXMLParser } from './importer/parser/IntelliJXmlParser';
import { KeystrokeKeyMappingJsonParser } from './importer/parser/KeystrokeKeyMappingJsonParser';
import { VSCodeJsonParser } from './importer/parser/VSCodeJsonParser';
import { FileOpenDialog } from './importer/reader/FileOpenDialog';
import { FileReaderDefault } from './importer/reader/FileReaderDefault';
import { Picker } from './importer/reader/Picker';
import { FileSaveDialog } from './importer/writer/FileSaveDialog';

export function activate(context: vscode.ExtensionContext) {
    vscode.commands.registerCommand('IntelliJ/importFile', async function () {
        /*---------------------------------------------------------------------
         * Reader
         *-------------------------------------------------------------------*/
        const osDestination: OS = await Picker.pickOSDestionation();
        if (!osDestination) {
            return;
        }

        const intellijXmlCustom: string = await FileOpenDialog.showXml();
        const intellijXmlDefault: string = await FileReaderDefault.readIntelliJ(osDestination, context);
        const vscodeJsonDefault: string = await FileReaderDefault.readVSCode(osDestination, context);
        const actionIdCommandMappingJson: string = await FileReaderDefault.readActionIdCommandMapping(context);
        const keystrokeKeyMappingJson: string = await FileReaderDefault.readKeystrokeKeyMapping(context);

        /*---------------------------------------------------------------------
         * Parser
         *-------------------------------------------------------------------*/
        const intellijJsonCustom: any = await IntelliJXMLParser.parseToJSON(intellijXmlCustom);
        const intellijJsonDefault: any = await IntelliJXMLParser.parseToJSON(intellijXmlDefault);
        const intellijCustoms: IntelliJKeymapXML[] = await IntelliJXMLParser.desirialize(intellijJsonCustom);
        const intellijDefaults: IntelliJKeymapXML[] = await IntelliJXMLParser.desirialize(intellijJsonDefault);
        const vscodeDefaults: VSCodeKeybinding[] = await VSCodeJsonParser.desirialize(vscodeJsonDefault);
        const actionIdCommandMappings: ActionIdCommandMapping[] = await ActionIdCommandMappingJsonParser.desirialize(
            actionIdCommandMappingJson
        );
        const keystrokeKeyMappings: KeystrokeKeyMapping[] = await KeystrokeKeyMappingJsonParser.desirialize(
            keystrokeKeyMappingJson
        );

        /*---------------------------------------------------------------------
         * Semantic Analyzer
         *-------------------------------------------------------------------*/
        const keybindings: VSCodeKeybinding[] = [];
        // TODO

        /*---------------------------------------------------------------------
         * Code Generator
         *-------------------------------------------------------------------*/
        const keybindingsJson = JSON.stringify(keybindings, undefined, 4);

        /*---------------------------------------------------------------------
         * Writer
         *-------------------------------------------------------------------*/
        await FileSaveDialog.saveJson(keybindingsJson);

        // await vscode.window.showTextDocument(keybindingsJson);
    });
}
