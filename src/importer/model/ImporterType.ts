import { QuickPickItem } from "vscode";

export type ImporterType = 'XmlFile' | 'Default';

export const XML_FILE: QuickPickItem = {
    label: 'Import from XML file',
    detail: 'Import key maps (schemas) from IntelliJ settings.'
}

export const DEFAULT: QuickPickItem = {
    label: 'Use Default',
}

export const ImporterTypePickerList: QuickPickItem[] = [
    XML_FILE, DEFAULT,
];
