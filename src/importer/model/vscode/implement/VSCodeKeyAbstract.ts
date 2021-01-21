import { VSCodeKey } from '../VSCodeKey';

export abstract class VSCodeKeyAbstract implements VSCodeKey {
    static readonly VSCODE_SECOND_DELIMITER = ' ';

    key: string;

    constructor() {
        this.key = '';
    }

    convert(intellijKeystroke: string): string {
        return intellijKeystroke;
    }
}
