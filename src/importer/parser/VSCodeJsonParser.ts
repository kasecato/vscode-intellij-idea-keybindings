/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { VSCodeKeybindingDefault } from '../model/vscode/implement/VSCodeKeybindingDefault';
import { VSCodeKeybinding } from '../model/vscode/VSCodeKeybinding';

export class VSCodeJsonParser {
    static desirialize(json: string): VSCodeKeybinding[] {
        if (!json) {
            return [];
        }

        const vscodeKeybindings = new Array<VSCodeKeybinding>();
        JSON.parse(json).map((row: any) => {
            const vscodeKeybinding = new VSCodeKeybindingDefault(row.command, row.key, row.when);
            vscodeKeybindings.push(vscodeKeybinding);
        });

        return vscodeKeybindings;
    }
}
