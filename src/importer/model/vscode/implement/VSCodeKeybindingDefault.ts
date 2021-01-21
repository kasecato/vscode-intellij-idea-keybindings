import { VSCodeKeybinding } from '../VSCodeKeybinding';

export class VSCodeKeybindingDefault implements VSCodeKeybinding {
    command: string;
    key: string;
    when?: string;

    constructor(command: string, key: string, when?: string) {
        this.command = command;
        this.key = key;
        this.when = when;
    }
}
