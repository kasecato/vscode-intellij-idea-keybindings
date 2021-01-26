import * as vscode from 'vscode';
import { KeybindingsJsonGenerator } from './importer/generator/KeybindingsJsonGenerator';
import { IntelliJKeymapXML } from './importer/model/intellij/implement/IntelliJKeymapXML';
import { OS } from './importer/model/OS';
import { ActionIdCommandMapping } from './importer/model/resource/ActionIdCommandMapping';
import { KeystrokeKeyMapping } from './importer/model/resource/KeystrokeKeyMapping';
import { VSCodeKeybinding } from './importer/model/vscode/VSCodeKeybinding';
import { ActionIdCommandMappingJsonParser } from './importer/parser/ActionIdCommandMappingJsonParser';
import { IntelliJXMLParser } from './importer/parser/IntelliJXmlParser';
import { KeystrokeKeyMappingJsonParser } from './importer/parser/KeystrokeKeyMappingJsonParser';
import { VSCodeJsonParser } from './importer/parser/VSCodeJsonParser';
import { FileOpenDialog, USE_DEFAULT } from './importer/reader/FileOpenDialog';
import { FileReaderDefault } from './importer/reader/FileReaderDefault';
import { Picker } from './importer/reader/Picker';
import { IntelliJSyntaxAnalyzer } from './importer/syntax-analyzer/IntelliJSyntaxAnalyzer';
import { FileOpen } from './importer/writer/FileOpen';

export function activate(context: vscode.ExtensionContext) {
    vscode.commands.registerCommand('IntelliJ/importFile', async function () {
        /*---------------------------------------------------------------------
         * Reader
         *-------------------------------------------------------------------*/
        const os: { src: OS; dst: OS } | undefined = await Picker.pickOSDestionation();
        if (!os) {
            return;
        }

        const intellijXmlCustom: string | USE_DEFAULT = await FileOpenDialog.showXml();

        const intellijXmlDefault: string = await FileReaderDefault.readIntelliJ(os.src, context);
        const vscodeJsonDefault: string = await FileReaderDefault.readVSCode(os.src, context);
        const actionIdCommandMappingJson: string = await FileReaderDefault.readActionIdCommandMapping(context);
        const keystrokeKeyMappingJson: string = await FileReaderDefault.readKeystrokeKeyMapping(context);

        /*---------------------------------------------------------------------
         * Parser
         *-------------------------------------------------------------------*/
        const intellijJsonCustom: any = (intellijXmlCustom)
            ? await IntelliJXMLParser.parseToJson(intellijXmlCustom)
            : undefined;
        const intellijJsonDefault: any = await IntelliJXMLParser.parseToJson(intellijXmlDefault);
        const intellijCustoms: IntelliJKeymapXML[] = (intellijXmlCustom)
            ? await IntelliJXMLParser.desirialize(intellijJsonCustom)
            : [];
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
        const syntaxAnalyzer = new IntelliJSyntaxAnalyzer(
            os.dst,
            intellijDefaults,
            intellijCustoms,
            vscodeDefaults,
            actionIdCommandMappings,
            keystrokeKeyMappings
        );
        const keybindings: VSCodeKeybinding[] = await syntaxAnalyzer.convert();

        /*---------------------------------------------------------------------
         * Code Generator
         *-------------------------------------------------------------------*/
        const keybindingsJson = await KeybindingsJsonGenerator.gene(keybindings);

        /*---------------------------------------------------------------------
         * Writer
         *-------------------------------------------------------------------*/
        const untitledKeybindingsJson = await FileOpen.openText(keybindingsJson);
        await FileOpen.showKeybindingsJson(untitledKeybindingsJson);
    });
}
