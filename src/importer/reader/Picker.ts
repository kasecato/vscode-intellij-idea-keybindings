import * as vscode from 'vscode';
import { DEFAULT, ImporterType, ImporterTypePickerList, XML_FILE } from '../model/ImporterType';
import { LINUX_TO_LINUX, LINUX_TO_MAC, LINUX_TO_WINDOWS, MAC_TO_LINUX, MAC_TO_MAC, MAC_TO_WINDOWS, OS, OSPickerList, WINDOWS_TO_LINUX, WINDOWS_TO_MAC, WINDOWS_TO_WINDOWS } from '../model/OS';

export type UNSELECT = undefined;

export class Picker {
    static async pickImporterType(): Promise<ImporterType | UNSELECT> {
        const options: vscode.QuickPickOptions = {
            placeHolder: 'Which OS do you want to convert for?',
            ignoreFocusOut: true,
        };
        const picked: vscode.QuickPickItem | undefined = await vscode.window.showQuickPick(ImporterTypePickerList, options);
        switch (picked) {
            case XML_FILE:
                return 'XmlFile';
            case DEFAULT:
                return 'Default';
            case undefined:
                return undefined;
        }
    }

    static async pickOSDestionation(): Promise<{ src: OS; dst: OS } | UNSELECT> {
        const osOptions: vscode.QuickPickOptions = {
            placeHolder: 'Which OS do you want to convert for?',
            ignoreFocusOut: true,
        };
        const picked: vscode.QuickPickItem | undefined = await vscode.window.showQuickPick(OSPickerList, osOptions);
        switch (picked) {
            case LINUX_TO_LINUX:
                return { src: 'Linux', dst: 'Linux' };
            case LINUX_TO_MAC:
                return { src: 'Linux', dst: 'Mac' };
            case LINUX_TO_WINDOWS:
                return { src: 'Linux', dst: 'Windows' };
            case MAC_TO_LINUX:
                return { src: 'Mac', dst: 'Linux' };
            case MAC_TO_MAC:
                return { src: 'Mac', dst: 'Mac' };
            case MAC_TO_WINDOWS:
                return { src: 'Mac', dst: 'Windows' };
            case WINDOWS_TO_LINUX:
                return { src: 'Windows', dst: 'Linux' };
            case WINDOWS_TO_MAC:
                return { src: 'Windows', dst: 'Mac' };
            case WINDOWS_TO_WINDOWS:
                return { src: 'Windows', dst: 'Windows' };
            case undefined:
                return undefined;
        }
    }
}
