import { IntelliJKeymap } from "../intellij/IntelliJKeymap";
import { OS } from "../OS";
import { VSCodeKey } from "./VSCodeKey";

export class VSCodeKeyWindows implements VSCodeKey {
    private static readonly VSCODE_REMOVING_DELIMITER = "-";
    private static readonly INTELLIJ_DELIMITTER = / /g;
    private static readonly VSCODE_DELIMITTER = "+";
    private static readonly INTELLIJ_META = /meta/g;
    private static readonly VSCODE_META = "win";

    os: OS = "Windows";
    keys: string[] = [];

    constructor(intellijKeymap: IntelliJKeymap, vscodeDefault: string | undefined = undefined) {
        if (vscodeDefault) {
            this.keys.push(VSCodeKeyWindows.VSCODE_REMOVING_DELIMITER + vscodeDefault);
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
            .replace(VSCodeKeyWindows.INTELLIJ_DELIMITTER, VSCodeKeyWindows.VSCODE_DELIMITTER)
            .replace(VSCodeKeyWindows.INTELLIJ_META, VSCodeKeyWindows.VSCODE_META);
    }
}
