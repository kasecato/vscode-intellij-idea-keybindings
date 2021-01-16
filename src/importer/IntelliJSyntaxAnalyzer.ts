import { IntelliJKeystroke } from "./model/intellij/IntelliJKeystroke";
import { OS } from "./model/OS";
import { TriggerSuggest } from "./model/vscode/keymap/TriggerSuggest";
import { VSCodeCommand } from "./model/vscode/VSCodeCommand";
import { VSCodeKey } from "./model/vscode/VSCodeKey";
import { VSCodeKeybinding } from "./model/vscode/VSCodeKeybinding";
import { VSCodeKeybindingImpl } from "./model/vscode/VSCodeKeybindingImpl";
import { VSCodeKeyLinux } from "./model/vscode/VSCodeKeyLinux";
import { VSCodeKeyMac } from "./model/vscode/VSCodeKeyMac";
import { VSCodeKeyWindows } from "./model/vscode/VSCodeKeyWindows";

export class IntelliJSyntaxAnalyzer {

    public static readonly NO_MAPPING = undefined;

    private static readonly INTELLIJ_TO_VSCODE_MAPPER: Map<string, VSCodeCommand> = new Map([
        ["CodeCompletion", new TriggerSuggest()],
    ]);

    public static convert(os: OS, action: string, first: IntelliJKeystroke, second: IntelliJKeystroke | undefined = undefined): VSCodeKeybinding | undefined {
        const vsCodeCommand = this.INTELLIJ_TO_VSCODE_MAPPER.get(action);
        if (!vsCodeCommand) {
            return this.NO_MAPPING;
        }
        const vsCodeKey = this.convertKey(os, first, second);
        return new VSCodeKeybindingImpl(vsCodeKey, vsCodeCommand);
    }

    private static convertKey(os: OS, first: IntelliJKeystroke, second: IntelliJKeystroke | undefined = undefined): VSCodeKey {
        switch (os) {
            case "Linux":
                return new VSCodeKeyLinux(first, second);
            case "Mac":
                return new VSCodeKeyMac(first, second);
            case "Windows":
                return new VSCodeKeyWindows(first, second);
        }
    }

}
