import { VSCodeKeybinding } from '../model/vscode/VSCodeKeybinding';

export class KeybindingsJsonGenerator {
    static gene(keybindings: VSCodeKeybinding[]): string {
        return JSON.stringify(keybindings, undefined, 4);
    }
}
