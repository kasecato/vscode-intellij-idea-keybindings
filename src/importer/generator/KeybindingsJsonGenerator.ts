import { VSCodeKeybinding } from '../model/vscode/VSCodeKeybinding';

export class KeybindingsJsonGenerator {
    static async gene(keybindings: VSCodeKeybinding[]): Promise<string> {
        return JSON.stringify(keybindings, undefined, 4);
    }
}
