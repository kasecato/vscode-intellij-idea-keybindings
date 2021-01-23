import { IntelliJKeymapXML } from '../../intellij/implement/IntelliJKeymapXML';
import { VSCodeKeyAbstract } from './VSCodeKeyAbstract';

export class VSCodeKeyMac extends VSCodeKeyAbstract {
    private static readonly VSCODE_META = 'cmd';

    convert(intellijKeystroke: string): string {
        return super.convert(intellijKeystroke).replace(IntelliJKeymapXML.INTELLIJ_META_KEY, VSCodeKeyMac.VSCODE_META);
    }
}
