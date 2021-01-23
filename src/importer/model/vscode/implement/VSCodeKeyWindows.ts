import { IntelliJKeymapXML } from '../../intellij/implement/IntelliJKeymapXML';
import { VSCodeKeyAbstract } from './VSCodeKeyAbstract';

export class VSCodeKeyWindows extends VSCodeKeyAbstract {
    private static readonly VSCODE_META = 'win';

    convert(intellijKeystroke: string): string {
        return super
            .convert(intellijKeystroke)
            .replace(IntelliJKeymapXML.INTELLIJ_META_KEY, VSCodeKeyWindows.VSCODE_META);
    }
}
