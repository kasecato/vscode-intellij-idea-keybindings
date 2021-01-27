import { QuickPickItem } from "vscode";

export type OS = 'Linux' | 'Mac' | 'Windows';

export const LINUX_TO_LINUX: QuickPickItem = {
    label: 'Linux to Linux',
}

export const LINUX_TO_MAC: QuickPickItem = {
    label: 'Linux to Mac',
}

export const LINUX_TO_WINDOWS: QuickPickItem = {
    label: 'Linux to Windows',
}

export const MAC_TO_LINUX: QuickPickItem = {
    label: 'Mac to Linux',
}

export const MAC_TO_MAC: QuickPickItem = {
    label: 'Mac to Mac',
}

export const MAC_TO_WINDOWS: QuickPickItem = {
    label: 'Mac to Windows',
}

export const WINDOWS_TO_LINUX: QuickPickItem = {
    label: 'Windows to Linux',
}

export const WINDOWS_TO_MAC: QuickPickItem = {
    label: 'Windows to Mac',
}

export const WINDOWS_TO_WINDOWS: QuickPickItem = {
    label: 'Windows to Windows',
}

export const OSPickerList: QuickPickItem[] = [
    LINUX_TO_LINUX, LINUX_TO_MAC, LINUX_TO_WINDOWS,
    MAC_TO_LINUX, MAC_TO_MAC, MAC_TO_WINDOWS,
    WINDOWS_TO_LINUX, WINDOWS_TO_MAC, WINDOWS_TO_WINDOWS,
];
