import { IntelliJSyntaxAnalyzer } from '../../IntelliJSyntaxAnalyzer';
import { IntelliJKeymapXML } from '../intellij/IntelliJKeymapXML';
import { IntelliJKeystroke } from '../intellij/IntelliJKeystroke';
import { OS } from '../OS';
import { VSCodeKey } from './VSCodeKey';
import { VSCodeKeyDefault } from './VSCodeKeyDefault';

export abstract class VSCodeKeyAbstract implements VSCodeKey {
    static readonly VSCODE_REMOVING_DELIMITER = '-';
    static readonly VSCODE_SECOND_DELIMITER = ' ';
    static readonly VSCODE_DELIMITTER = '+';

    os: OS;
    key: string;

    constructor(
        os: OS,
        intellijKeystrokeCustom: IntelliJKeymapXML | undefined = undefined,
        intellijKeystrokeRemove: IntelliJKeystroke | undefined = undefined,
        vscodeKeyRemove: VSCodeKeyDefault | undefined = undefined
    ) {
        this.os = os;

        if (intellijKeystrokeCustom && intellijKeystrokeCustom.first) {
            this.key = this.convert(intellijKeystrokeCustom.first);
            if (intellijKeystrokeCustom.second) {
                this.key += VSCodeKeyAbstract.VSCODE_SECOND_DELIMITER + this.convert(intellijKeystrokeCustom.second);
            }
            return;
        }

        if (intellijKeystrokeRemove) {
            this.key = VSCodeKeyAbstract.VSCODE_REMOVING_DELIMITER + this.convert(intellijKeystrokeRemove.first);
            if (intellijKeystrokeRemove.second) {
                this.key += VSCodeKeyAbstract.VSCODE_SECOND_DELIMITER + this.convert(intellijKeystrokeRemove.second);
            }
            return;
        }

        if (vscodeKeyRemove) {
            this.key = VSCodeKeyAbstract.VSCODE_REMOVING_DELIMITER + vscodeKeyRemove.key;
            return;
        }

        throw Error('No IntelliJ keystrokes found');
    }

    convert(intellijKeystroke: string): string {
        IntelliJSyntaxAnalyzer.INTELLIJ_TO_VSCODE_KEY.forEach((vscodeMeta, intellijMeta) => {
            intellijKeystroke = intellijKeystroke.replace(intellijMeta, vscodeMeta);
        });
        return intellijKeystroke;
    }
}
