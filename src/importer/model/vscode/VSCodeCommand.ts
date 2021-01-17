import { VSCodeKeyDefault } from './VSCodeKeyDefault';

export interface VSCodeCommand {
    command: string;
    when: string;
    keysDefault: VSCodeKeyDefault[];
}
