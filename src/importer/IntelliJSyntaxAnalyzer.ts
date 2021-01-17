import { IntelliJKeymap } from "./model/intellij/IntelliJKeymap";
import { TriggerSuggest } from "./model/vscode/keymap/TriggerSuggest";
import { VSCodeCommand } from "./model/vscode/VSCodeCommand";
import { VSCodeKey } from "./model/vscode/VSCodeKey";
import { VSCodeKeybinding } from "./model/vscode/VSCodeKeybinding";
import { VSCodeKeyLinux } from "./model/vscode/VSCodeKeyLinux";
import { VSCodeKeyMac } from "./model/vscode/VSCodeKeyMac";
import { VSCodeKeyWindows } from "./model/vscode/VSCodeKeyWindows";

export class IntelliJSyntaxAnalyzer {
    public static readonly NO_MAPPING = undefined;

    private static readonly INTELLIJ_TO_VSCODE_MAPPER: Map<string, VSCodeCommand> = new Map([
        ["CodeCompletion", new TriggerSuggest()],
    ]);

    public static convertToVSCodeDefault(intellijKeymap: IntelliJKeymap): VSCodeKeybinding[] | undefined {
        const vscodeCommand = this.INTELLIJ_TO_VSCODE_MAPPER.get(intellijKeymap.action);
        if (!vscodeCommand) {
            return this.NO_MAPPING;
        }

        const vscodeDefault = vscodeCommand.keysDefault.find(vscodeKey => vscodeKey.os === intellijKeymap.os);
        if (!vscodeDefault) {
            throw Error("Cannot read VS Code default keymaps: " + vscodeCommand.command);
        }

        const vscodeKeys = vscodeDefault.keys.map(defaultKey => this.convertToVSCodeKey(intellijKeymap, defaultKey));
        return vscodeKeys.map(vscodeKey => new VSCodeKeybinding(vscodeKey, vscodeCommand));
    }

    public static convertToVSCode(intellijKeymap: IntelliJKeymap): VSCodeKeybinding | undefined {
        const vscodeCommand = this.INTELLIJ_TO_VSCODE_MAPPER.get(intellijKeymap.action);
        if (!vscodeCommand) {
            return this.NO_MAPPING;
        }

        const vscodeKey = this.convertToVSCodeKey(intellijKeymap);
        return new VSCodeKeybinding(vscodeKey, vscodeCommand);
    }

    private static convertToVSCodeKey(
        intellijKeymap: IntelliJKeymap,
        vscodeDefault: string | undefined = undefined
    ): VSCodeKey {
        switch (intellijKeymap.os) {
            case "Linux":
                return new VSCodeKeyLinux(intellijKeymap, vscodeDefault);
            case "Mac":
                return new VSCodeKeyMac(intellijKeymap, vscodeDefault);
            case "Windows":
                return new VSCodeKeyWindows(intellijKeymap, vscodeDefault);
        }
    }
}
