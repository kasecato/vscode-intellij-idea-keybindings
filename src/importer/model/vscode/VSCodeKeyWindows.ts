import { IntelliJKeystrokeDefault } from '../intellij/IntelliJKeystrokeDefault';
import { VSCodeKeyAbstract } from './VSCodeKeyAbstract';

export class VSCodeKeyWindows extends VSCodeKeyAbstract {
    private static readonly VSCODE_META = 'win';

    convert(intellijKeystroke: string): string {
        return super
            .convert(intellijKeystroke)
            .replace(IntelliJKeystrokeDefault.INTELLIJ_META, VSCodeKeyWindows.VSCODE_META);
    }
}
