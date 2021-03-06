import * as parser from 'fast-xml-parser';
import { IntelliJKeymapXML } from '../model/intellij/implement/IntelliJKeymapXML';
import { USE_DEFAULT_FILE } from '../reader/FileOpenDialog';

export class IntelliJXMLParser {
    static async parseToJson(xml: string | USE_DEFAULT_FILE): Promise<any | USE_DEFAULT_FILE> {
        if (!xml) {
            return undefined;
        }

        const parserXmlOptions: parser.X2jOptionsOptional = {
            ignoreAttributes: false,
            parseAttributeValue: true,
            arrayMode: true,
        };
        if (!parser.validate(xml)) {
            throw Error('Cannot load this IntelliJ IDEA Keymap file. Plesase check the file format.');
        }
        return parser.parse(xml, parserXmlOptions);
    }

    static async desirialize(json: any | USE_DEFAULT_FILE): Promise<IntelliJKeymapXML[]> {
        if (!json || !json.keymap) {
            return [];
        }

        const intellijKeymaps = new Array<IntelliJKeymapXML>();
        const actionElements = json.keymap[0].action;
        for (const actionIndex in actionElements) {
            const actionIdAttr = actionElements[actionIndex]['@_id'];
            const keystorkeElements = actionElements[actionIndex]['keyboard-shortcut'];

            for (const keystrokeIndex in keystorkeElements) {
                const keyboardShortcutElement = keystorkeElements[keystrokeIndex];
                const firstKeystrokeAttr = keyboardShortcutElement['@_first-keystroke'];
                const secondKeystrokeAttr = keyboardShortcutElement['@_second-keystroke'];
                const intellijKeymapXml = new IntelliJKeymapXML(actionIdAttr, firstKeystrokeAttr, secondKeystrokeAttr);
                intellijKeymaps.push(intellijKeymapXml);
            }
        }
        return intellijKeymaps;
    }
}
