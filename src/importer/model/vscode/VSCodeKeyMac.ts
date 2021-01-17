import { IntelliJKeymap } from "../intellij/IntelliJKeymap";
import { OS } from "../OS";
import { VSCodeKey } from "./VSCodeKey";

export class VSCodeKeyMac implements VSCodeKey {
    private static readonly VSCODE_REMOVING_DELIMITER = "-";
    private static readonly INTELLIJ_DELIMITTER = / /g;
    private static readonly VSCODE_DELIMITTER = "+";
    private static readonly INTELLIJ_META = /meta/g;
    private static readonly VSCODE_META = "cmd";

    os: OS = "Mac";
    keys: string[] = [];

    constructor(intellijKeymap: IntelliJKeymap, vscodeDefault: string | undefined = undefined) {
        if (vscodeDefault) {
            this.keys.push(VSCodeKeyMac.VSCODE_REMOVING_DELIMITER + vscodeDefault);
            return;
        }
        if (intellijKeymap.first) {
            this.keys.push(this.convert(intellijKeymap.first));
            if (intellijKeymap.second) {
                this.keys.push(this.convert(intellijKeymap.second));
            }
            return;
        }
    }

    private convert(intellijKeystroke: string): string {
        return intellijKeystroke
            .replace(VSCodeKeyMac.INTELLIJ_DELIMITTER, VSCodeKeyMac.VSCODE_DELIMITTER)
            .replace(VSCodeKeyMac.INTELLIJ_META, VSCodeKeyMac.VSCODE_META);
    }
}
