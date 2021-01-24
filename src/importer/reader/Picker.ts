import * as vscode from 'vscode';
import { MAC_TO_LINUX, MAC_TO_MAC, MAC_TO_WINDOWS, OS, OSPickerList } from '../model/OS';

export class Picker {
    static async pickOSDestionation(): Promise<{ src: OS; dst: OS } | undefined> {
        const osOptions: vscode.QuickPickOptions = {
            placeHolder: 'Which OS do you want to convert for?',
            ignoreFocusOut: true,
        };
        const picked: vscode.QuickPickItem | undefined = await vscode.window.showQuickPick(OSPickerList, osOptions);
        switch (picked) {
            case MAC_TO_LINUX:
                return { src: 'Mac', dst: 'Linux' };
            case MAC_TO_MAC:
                return { src: 'Mac', dst: 'Mac' };
            case MAC_TO_WINDOWS:
                return { src: 'Mac', dst: 'Windows' };
            case undefined:
                return undefined;
        }
    }
}
