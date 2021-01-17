import { IntelliJKeymap } from "../intellij/IntelliJKeymap";
import { OS } from "../OS";
import { VSCodeKey } from "./VSCodeKey";

export class VSCodeKeyLinux implements VSCodeKey {
    private static readonly VSCODE_REMOVING_DELIMITER = "-";
    private static readonly INTELLIJ_DELIMITTER = / /gi;
    private static readonly VSCODE_DELIMITTER = "+";

    os: OS = "Linux";
    keys: string[] = [];

    constructor(intellijKeymap: IntelliJKeymap, vscodeDefault: string | undefined = undefined) {
        if (vscodeDefault) {
            this.keys.push(VSCodeKeyLinux.VSCODE_REMOVING_DELIMITER + vscodeDefault);
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
        return intellijKeystroke.replace(VSCodeKeyLinux.INTELLIJ_DELIMITTER, VSCodeKeyLinux.VSCODE_DELIMITTER);
    }
}
