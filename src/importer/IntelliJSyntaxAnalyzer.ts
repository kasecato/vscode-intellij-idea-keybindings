import { IntelliJKeymap } from './model/intellij/IntelliJKeymap';
import { IntelliJKeymapXML } from './model/intellij/IntelliJKeymapXML';
import { IntelliJKeystroke } from './model/intellij/IntelliJKeystroke';
import { IntelliJKeystrokeDefault } from './model/intellij/IntelliJKeystrokeDefault';
import { CodeCompletion } from './model/intellij/keymap/editing/CodeCompletion';
import { RenameElement } from './model/intellij/keymap/RenameElement';
import { OS } from './model/OS';
import { Rename } from './model/vscode/keymap/Rename';
import { TriggerSuggest } from './model/vscode/keymap/editing/TriggerSuggest';
import { VSCodeCommand } from './model/vscode/VSCodeCommand';
import { VSCodeKey } from './model/vscode/VSCodeKey';
import { VSCodeKeybinding } from './model/vscode/VSCodeKeybinding';
import { VSCodeKeyDefault } from './model/vscode/VSCodeKeyDefault';
import { VSCodeKeyLinux } from './model/vscode/VSCodeKeyLinux';
import { VSCodeKeyMac } from './model/vscode/VSCodeKeyMac';
import { VSCodeKeyWindows } from './model/vscode/VSCodeKeyWindows';
import { EditorCompleteStatement } from './model/intellij/keymap/editing/EditorCompleteStatement';
import { AcceptSelectedSuggestionEnter } from './model/vscode/keymap/editing/AcceptSelectedSuggestionEnter';

export class IntelliJSyntaxAnalyzer {
    static readonly NO_MAPPING = undefined;
    static readonly VSCODE_DELIMITTER = '+';
    private static readonly INTELLIJ_TO_VSCODE_MAPPER: Map<IntelliJKeymap, VSCodeCommand> = new Map([
        // Editing
        [new CodeCompletion(), new TriggerSuggest()],
        [new EditorCompleteStatement(), new AcceptSelectedSuggestionEnter()],

        [new RenameElement(), new Rename()],
    ]);
    static readonly INTELLIJ_TO_VSCODE_KEY: Map<RegExp, string> = new Map([
        [IntelliJKeystrokeDefault.INTELLIJ_DELIMITTER, IntelliJSyntaxAnalyzer.VSCODE_DELIMITTER],

        [/back_quote/g, '[Backquote]'],
        [/minus/g, '[Minus]'],
        [/equals/g, '[Equal]'],
        [/open_bracket/g, '[BracketLeft]'],
        [/close_bracket/g, '[BracketRight]'],
        [/back_slash/g, '[Backslash]'],
        [/semicolon/g, '[Semicolon]'],
        [/quotedbl/g, '"'],
        [/quote/g, '[Quote]'],
        [/comma/g, '[Comma]'],
        [/period/g, '[Period]'],
        [/back_slash/g, '\\'],
        [/slash/g, '[Slash]'],

        [/left_parenthesis/g, '('],
        [/right_parenthesis/g, ')'],
        [/page_up/g, '[PageUp]'],
        [/page_down/g, '[PageDown]'],
        [/left/g, '[ArrowLeft]'],
        [/up/g, '[ArrowUp]'],
        [/right/g, '[ArrowRight]'],
        [/down/g, '[ArrowDown]'],
        [/end/g, '[End]'],
        [/home/g, '[Home]'],

        [/tab/g, '[Tab]'],
        [/enter/g, '[Enter]'],
        [/escape/g, '[Escape]'],
        [/back_space/g, '[Backspace]'],
        [/space/g, '[Space]'],
        [/delete/g, '[Delete]'],

        [/pause/g, '[Pause]'],
        [/caps_lock/g, '[CapsLock]'],
        [/insert/g, '[Insert]'],

        [/exclamation_mark/g, '!'],
        [/number_sign/g, '#'],
        [/dollar/g, '$'],
        [/circumflex/g, '^'],
        [/ampersand/g, '&'],
        [/asterisk/g, '*'],
        [/underscore/g, '_'],
        [/plus/g, '+'],
        [/colon/g, '.'],
        [/less/g, '<'],
        [/greater/g, '>'],

        [/numpad0/g, '[Numpad0]'],
        [/numpad1/g, '[Numpad1]'],
        [/numpad2/g, '[Numpad2]'],
        [/numpad3/g, '[Numpad3]'],
        [/numpad4/g, '[Numpad4]'],
        [/numpad5/g, '[Numpad5]'],
        [/numpad6/g, '[Numpad6]'],
        [/numpad7/g, '[Numpad7]'],
        [/numpad8/g, '[Numpad8]'],
        [/numpad9/g, '[Numpad9]'],
        [/multiply/g, '[NumpadMultiply]'],
        // [//g, "[NumpadAdd]"], // FIXME:
        // [//g, "[NumpadComma]"], // FIXME:

        [/subtract/g, '[NumpadSubtract'],
        [/decimal/g, '[NumpadDecimal'],
        [/divide/g, '[NumpadDivide]'],
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
            case 'Linux':
                return new VSCodeKeyLinux(os, intellijKeystrokeCustom, IntelliJKeystrokeRemove, vscodeKeyRemove);
            case 'Mac':
                return new VSCodeKeyMac(os, intellijKeystrokeCustom, IntelliJKeystrokeRemove, vscodeKeyRemove);
            case 'Windows':
                return new VSCodeKeyWindows(os, intellijKeystrokeCustom, IntelliJKeystrokeRemove, vscodeKeyRemove);
        }
    }
}
