import * as vscode from 'vscode';
import { OS, OSArray } from '../model/OS';

export class Picker {
    static async pickOSDestionation(): Promise<OS> {
        const osOptions: vscode.QuickPickOptions = {
            placeHolder: 'Which OS do you want to convert for?',
            ignoreFocusOut: true,
        };
        const osDestination: OS = (await vscode.window.showQuickPick(
            OSArray.map(os => os),
            osOptions
        )) as OS;
        return osDestination;
    }
}
