import { VSCodeCommand } from "./VSCodeCommand";
import { VSCodeKey } from "./VSCodeKey";

export class VSCodeKeybinding {
    private static readonly KEY_DELIMITER: string = " ";

    key: string;
    command: string;
    when: string;

    constructor(key: VSCodeKey, command: VSCodeCommand) {
        this.key = key.keys.join(VSCodeKeybinding.KEY_DELIMITER);
        this.command = command.command;
        this.when = command.when;
    }
}
