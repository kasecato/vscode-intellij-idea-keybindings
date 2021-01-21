import { VSCodeKeyAbstract } from './VSCodeKeyAbstract';

export class VSCodeKeyWindows extends VSCodeKeyAbstract {
    private static readonly VSCODE_META = 'win';

    convert(intellijKeystroke: string): string {
        return super
            .convert(intellijKeystroke)
            .replace(/meta/g, VSCodeKeyWindows.VSCODE_META);
    }
}
