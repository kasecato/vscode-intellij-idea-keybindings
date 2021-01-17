import { IntelliJKeystrokeDefault } from "../intellij/IntelliJKeystrokeDefault";
import { VSCodeKeyAbstract } from "./VSCodeKeyAbstract";

export class VSCodeKeyMac extends VSCodeKeyAbstract {
    private static readonly VSCODE_META = "cmd";

    convert(intellijKeystroke: string): string {
        return super
            .convert(intellijKeystroke)
            .replace(IntelliJKeystrokeDefault.INTELLIJ_META, VSCodeKeyMac.VSCODE_META);
    }
}
