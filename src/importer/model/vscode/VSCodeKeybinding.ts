import { VSCodeCommand } from "./VSCodeCommand";
import { VSCodeKey } from "./VSCodeKey";

export class VSCodeKeybinding {
    key: string;
    command: string;
    when: string;

    constructor(command: VSCodeCommand, key: VSCodeKey) {
        this.key = key.key;
        this.command = command.command;
        this.when = command.when;
    }
}
