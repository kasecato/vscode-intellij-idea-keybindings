import { QuickPickItem } from "vscode";

export type OS = 'Linux' | 'Mac' | 'Windows';

export const MAC_TO_LINUX: QuickPickItem = {
    label: 'Mac to Linux',
    detail: 'Import from IntelliJ for macOS (XML), Export to VSCode for Linux (JSON)'
}

export const MAC_TO_MAC: QuickPickItem = {
    label: 'Mac to Mac',
    detail: 'Import from IntelliJ for macOS (XML), Export to VSCode for macOS (JSON)'
}

export const MAC_TO_WINDOWS: QuickPickItem = {
    label: 'Mac to Mac',
    detail: 'Import from IntelliJ for macOS (XML), Export to VSCode for Windows (JSON)'
}

export const OSPickerList: QuickPickItem[] = [MAC_TO_LINUX, MAC_TO_MAC, MAC_TO_WINDOWS];
