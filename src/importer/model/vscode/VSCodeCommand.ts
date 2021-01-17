import { VSCodeKey } from "./VSCodeKey";

export interface VSCodeCommand {
    command: string;
    when: string;
    keysDefault: VSCodeKey[];
}
