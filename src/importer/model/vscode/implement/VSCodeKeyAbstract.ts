import { IntelliJKeymap } from '../../intellij/IntelliJKeymap';
import { KeystrokeKeyMapping } from '../../resource/KeystrokeKeyMapping';
import { VSCodeKey } from '../VSCodeKey';

export abstract class VSCodeKeyAbstract implements VSCodeKey {
    private static readonly VSCODE_SECOND_DELIMITER = ' ';
    private readonly keystrokeKeyMappings: readonly KeystrokeKeyMapping[];

    key: string;

    constructor(intellijKeymap: IntelliJKeymap, keystrokeKeyMappings: readonly KeystrokeKeyMapping[]) {
        this.keystrokeKeyMappings = keystrokeKeyMappings;
        this.key = this.convert(intellijKeymap.first);
        if (intellijKeymap.second) {
            this.key += VSCodeKeyAbstract.VSCODE_SECOND_DELIMITER + this.convert(intellijKeymap.second);
        }
    }

    convert(intellijKeystroke: string): string {
        for (const mapping of this.keystrokeKeyMappings) {
            intellijKeystroke = intellijKeystroke.replace(mapping.intellij, mapping.vscode);
        };
        return intellijKeystroke;
    }
}
