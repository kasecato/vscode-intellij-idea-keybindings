/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { XMLParser, X2jOptionsOptional } from 'fast-xml-parser';
import { IntelliJKeymapXML } from '../model/intellij/implement/IntelliJKeymapXML';
import { USE_DEFAULT_FILE } from '../reader/FileOpenDialog';

export class IntelliJXMLParser {
    private static readonly ALWAYS_ARRAY: string[] = [
        "keymap.action",
        "keymap.action.keyboard-shortcut"
    ];

    static parseToJson(xml: string | USE_DEFAULT_FILE): any | USE_DEFAULT_FILE {
        if (!xml) {
            return undefined;
        }

        const parserXmlOptions: X2jOptionsOptional = {
            ignoreDeclaration: true,
            ignoreAttributes: false,
            parseAttributeValue: true,
            isArray: (tagName: string, jpath: string, isLeafNode: boolean, isAttribute: boolean) => {
                return IntelliJXMLParser.ALWAYS_ARRAY.includes(jpath);
            }
        };
        const parser = new XMLParser(parserXmlOptions);
        try {
            return parser.parse(xml, parserXmlOptions);
        } catch (e) {
            throw Error('Cannot load this IntelliJ IDEA Keymap file. Plesase check the file format.');
        }
    }

    static desirialize(json: any | USE_DEFAULT_FILE): IntelliJKeymapXML[] {
        if (!json || !json.keymap) {
            return [];
        }

        const intellijKeymaps = new Array<IntelliJKeymapXML>();
        const actionElements = json.keymap.action;
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
