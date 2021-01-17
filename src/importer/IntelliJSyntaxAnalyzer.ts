import { IntelliJKeymap } from "./model/intellij/IntelliJKeymap";
import { IntelliJKeymapXML } from "./model/intellij/IntelliJKeymapXML";
import { IntelliJKeystroke } from "./model/intellij/IntelliJKeystroke";
import { CodeCompletion } from "./model/intellij/keymap/CodeCompletion";
import { RenameElement } from "./model/intellij/keymap/RenameElement";
import { OS } from "./model/OS";
import { Rename } from "./model/vscode/keymap/Rename";
import { TriggerSuggest } from "./model/vscode/keymap/TriggerSuggest";
import { VSCodeCommand } from "./model/vscode/VSCodeCommand";
import { VSCodeKey } from "./model/vscode/VSCodeKey";
import { VSCodeKeybinding } from "./model/vscode/VSCodeKeybinding";
import { VSCodeKeyDefault } from "./model/vscode/VSCodeKeyDefault";
import { VSCodeKeyLinux } from "./model/vscode/VSCodeKeyLinux";
import { VSCodeKeyMac } from "./model/vscode/VSCodeKeyMac";
import { VSCodeKeyWindows } from "./model/vscode/VSCodeKeyWindows";

export class IntelliJSyntaxAnalyzer {
    static readonly NO_MAPPING = undefined;

    private static readonly INTELLIJ_TO_VSCODE_MAPPER: Map<IntelliJKeymap, VSCodeCommand> = new Map([
        [new CodeCompletion(), new TriggerSuggest()],
        [new RenameElement(), new Rename()],
    ]);

    static convertToVSCode(os: OS, intellijKeymapCustom: IntelliJKeymapXML): VSCodeKeybinding[] | undefined {
        const intellijKeymap = [...this.INTELLIJ_TO_VSCODE_MAPPER.keys()].find(
            intellijDefault => intellijDefault.actionId === intellijKeymapCustom.actionId
        );
        if (!intellijKeymap) {
            return this.NO_MAPPING;
        }

        const vscodeCommand = this.INTELLIJ_TO_VSCODE_MAPPER.get(intellijKeymap);
        if (!vscodeCommand) {
            return this.NO_MAPPING;
        }

        const vscodeKeybindings: VSCodeKeybinding[] = [];

        // Add Custom IntelliJ
        if (intellijKeymapCustom.first) {
            const vscodeKey = this.convertToVSCodeKey(os, intellijKeymapCustom);
            vscodeKeybindings.push(new VSCodeKeybinding(vscodeCommand, vscodeKey));
        }

        return vscodeKeybindings;
    }

    static removeDefault(os: OS, intellijKeymapCustom: IntelliJKeymapXML): VSCodeKeybinding[] | undefined {
        const intellijKeymap = [...this.INTELLIJ_TO_VSCODE_MAPPER.keys()].find(
            intellijDefault => intellijDefault.actionId === intellijKeymapCustom.actionId
        );
        if (!intellijKeymap) {
            return this.NO_MAPPING;
        }

        const vscodeCommand = this.INTELLIJ_TO_VSCODE_MAPPER.get(intellijKeymap);
        if (!vscodeCommand) {
            return this.NO_MAPPING;
        }

        const vscodeKeybindings: VSCodeKeybinding[] = [];

        // Remove Default VSCode
        const vscodeKeysDefault = vscodeCommand.keysDefault.filter(vscodeKey => vscodeKey.os === os);
        vscodeKeysDefault
            .map(vscodeKeyDefault => this.convertToVSCodeKey(os, undefined, undefined, vscodeKeyDefault))
            .map(vscodeKey => new VSCodeKeybinding(vscodeCommand, vscodeKey))
            .forEach(vscodeKeybinding => vscodeKeybindings.push(vscodeKeybinding));

        // Remove Default IntelliJ
        const intellijKeymapsDefault = intellijKeymap.keystrokesDefault.filter(
            intellijDefault => intellijDefault.os === os
        );
        intellijKeymapsDefault
            .map(intellijKeymap => this.convertToVSCodeKey(os, undefined, intellijKeymap))
            .map(vscodeKey => new VSCodeKeybinding(vscodeCommand, vscodeKey))
            .forEach(vscodeKeybinding => vscodeKeybindings.push(vscodeKeybinding));

        return vscodeKeybindings;
    }

    private static convertToVSCodeKey(
        os: OS,
        intellijKeystrokeCustom: IntelliJKeymapXML | undefined,
        IntelliJKeystrokeRemove: IntelliJKeystroke | undefined = undefined,
        vscodeKeyRemove: VSCodeKeyDefault | undefined = undefined
    ): VSCodeKey {
        switch (os) {
            case "Linux":
                return new VSCodeKeyLinux(os, intellijKeystrokeCustom, IntelliJKeystrokeRemove, vscodeKeyRemove);
            case "Mac":
                return new VSCodeKeyMac(os, intellijKeystrokeCustom, IntelliJKeystrokeRemove, vscodeKeyRemove);
            case "Windows":
                return new VSCodeKeyWindows(os, intellijKeystrokeCustom, IntelliJKeystrokeRemove, vscodeKeyRemove);
        }
    }
}
