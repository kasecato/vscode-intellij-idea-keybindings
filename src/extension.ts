import * as vscode from 'vscode';
import { KeybindingsJsonGenerator } from './importer/generator/KeybindingsJsonGenerator';
import { ImporterType } from './importer/model/ImporterType';
import { IntelliJKeymapXML } from './importer/model/intellij/implement/IntelliJKeymapXML';
import { OS } from './importer/model/OS';
import { ActionIdCommandMapping } from './importer/model/resource/ActionIdCommandMapping';
import { KeystrokeKeyMapping } from './importer/model/resource/KeystrokeKeyMapping';
import { VSCodeKeybinding } from './importer/model/vscode/VSCodeKeybinding';
import { ActionIdCommandMappingJsonParser } from './importer/parser/ActionIdCommandMappingJsonParser';
import { IntelliJXMLParser } from './importer/parser/IntelliJXmlParser';
import { KeystrokeKeyMappingJsonParser } from './importer/parser/KeystrokeKeyMappingJsonParser';
import { VSCodeJsonParser } from './importer/parser/VSCodeJsonParser';
import { FileOpenDialog, USE_DEFAULT_FILE } from './importer/reader/FileOpenDialog';
import { FileReaderDefault } from './importer/reader/FileReaderDefault';
import { Picker, UNSELECT } from './importer/reader/Picker';
import { IntelliJSyntaxAnalyzer } from './importer/syntax-analyzer/IntelliJSyntaxAnalyzer';
import { FileOpen } from './importer/writer/FileOpen';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('intellij.importKeyMapsSchema', async () => await importKeyMapsSchema(context))
    );
}

export async function importKeyMapsSchema(context: vscode.ExtensionContext) {
    /*---------------------------------------------------------------------
     * Reader
     *-------------------------------------------------------------------*/
    const importerType: ImporterType | UNSELECT = await Picker.pickImporterType();
    if (!importerType) {
        return;
    }

    const os: { src: OS; dst: OS } | UNSELECT = await Picker.pickOSDestionation();
    if (!os) {
        return;
    }

    let intellijXmlCustom: string | USE_DEFAULT_FILE;
    if (importerType === 'XmlFile') {
        intellijXmlCustom = await FileOpenDialog.showXml();
        if (!intellijXmlCustom) {
            return;
        }
    }

    const intellijXmlDefault: string = await FileReaderDefault.readIntelliJ(os.src, context);
    const vscodeJsonDefault: string = await FileReaderDefault.readVSCode(os.src, context);
    const actionIdCommandMappingJson: string = await FileReaderDefault.readActionIdCommandMapping(context);
    const keystrokeKeyMappingJson: string = await FileReaderDefault.readKeystrokeKeyMapping(context);

    /*---------------------------------------------------------------------
     * Parser
     *-------------------------------------------------------------------*/
    const intellijJsonCustom: any | USE_DEFAULT_FILE = await IntelliJXMLParser.parseToJson(intellijXmlCustom);
    const intellijJsonDefault: any | USE_DEFAULT_FILE = await IntelliJXMLParser.parseToJson(intellijXmlDefault);
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
    const syntaxAnalyzer = new IntelliJSyntaxAnalyzer(
        os.dst,
        actionIdCommandMappings,
        keystrokeKeyMappings,
        vscodeDefaults,
        intellijDefaults,
        intellijCustoms
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
}
