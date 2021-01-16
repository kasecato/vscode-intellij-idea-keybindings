import { VSCodeCommand } from "./VSCodeCommand";
import { VSCodeKey } from "./VSCodeKey";

export class VSCodeKeybindingImpl {

    key: string;
    command: string;
    when: string;

    constructor(key: VSCodeKey, command: VSCodeCommand) {
        this.key = key.key;
        this.command = command.command;
        this.when = command.when;
    }

}
