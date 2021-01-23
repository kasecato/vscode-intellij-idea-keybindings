import { IntelliJKeymap } from '../../intellij/IntelliJKeymap';
import { KeystrokeKeyMapping } from '../../resource/KeystrokeKeyMapping';
import { VSCodeKey } from '../VSCodeKey';

export abstract class VSCodeKeyAbstract implements VSCodeKey {
    private static readonly VSCODE_SECOND_DELIMITER = ' ';
    private readonly keystrokeKeyMappings: KeystrokeKeyMapping[];

    key: string;

    constructor(intellijKeymap: IntelliJKeymap, keystrokeKeyMappings: KeystrokeKeyMapping[]) {
        this.keystrokeKeyMappings = keystrokeKeyMappings;
        this.key = this.convert(intellijKeymap.first);
        if (intellijKeymap.second) {
            this.key += VSCodeKeyAbstract.VSCODE_SECOND_DELIMITER + this.convert(intellijKeymap.second);
        }
    }

    convert(intellijKeystroke: string): string {
        this.keystrokeKeyMappings.forEach(mapping => {
            intellijKeystroke = intellijKeystroke.replace(mapping.intellij, mapping.vscode);
        });
        return intellijKeystroke;
    }
}
