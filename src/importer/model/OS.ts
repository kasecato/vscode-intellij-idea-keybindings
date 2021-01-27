import { QuickPickItem } from "vscode";

export type OS = 'Linux' | 'Mac' | 'Windows';

export const LINUX_TO_LINUX: QuickPickItem = {
    label: 'Linux to Linux',
    detail: 'Import from IntelliJ for Linux (XML), Export to VSCode for Linux (JSON)'
}

export const LINUX_TO_MAC: QuickPickItem = {
    label: 'Linux to Mac',
    detail: 'Import from IntelliJ for Linux (XML), Export to VSCode for macOS (JSON)'
}

export const LINUX_TO_WINDOWS: QuickPickItem = {
    label: 'Linux to Windows',
    detail: 'Import from IntelliJ for Linux (XML), Export to VSCode for Windows (JSON)'
}

export const MAC_TO_LINUX: QuickPickItem = {
    label: 'Mac to Linux',
    detail: 'Import from IntelliJ for macOS (XML), Export to VSCode for Linux (JSON)'
}

export const MAC_TO_MAC: QuickPickItem = {
    label: 'Mac to Mac',
    detail: 'Import from IntelliJ for macOS (XML), Export to VSCode for macOS (JSON)'
}

export const MAC_TO_WINDOWS: QuickPickItem = {
    label: 'Mac to Windows',
    detail: 'Import from IntelliJ for macOS (XML), Export to VSCode for Windows (JSON)'
}

export const WINDOWS_TO_LINUX: QuickPickItem = {
    label: 'Windows to Linux',
    detail: 'Import from IntelliJ for Windows (XML), Export to VSCode for Linux (JSON)'
}

export const WINDOWS_TO_MAC: QuickPickItem = {
    label: 'Windows to Mac',
    detail: 'Import from IntelliJ Windows (XML), Export to VSCode for macOS (JSON)'
}

export const WINDOWS_TO_WINDOWS: QuickPickItem = {
    label: 'Windows to Windows',
    detail: 'Import from IntelliJ for Windows (XML), Export to VSCode for Windows (JSON)'
}

export const OSPickerList: QuickPickItem[] = [
    LINUX_TO_LINUX, LINUX_TO_MAC, LINUX_TO_WINDOWS,
    MAC_TO_LINUX, MAC_TO_MAC, MAC_TO_WINDOWS,
    WINDOWS_TO_LINUX, WINDOWS_TO_MAC, WINDOWS_TO_WINDOWS,
];
