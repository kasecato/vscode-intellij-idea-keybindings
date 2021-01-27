import * as vscode from 'vscode';
import { FileReader } from './FileReader';

export type USE_DEFAULT_FILE = undefined;

export class FileOpenDialog {

    static async showXml(): Promise<string | USE_DEFAULT_FILE> {
        const readerXmlOptions: vscode.OpenDialogOptions = {
            canSelectFiles: true,
            filters: {
                XML: ['xml'],
            },
        };

        const xmlUri = await vscode.window.showOpenDialog(readerXmlOptions);
        if (!xmlUri || !xmlUri[0]) {
            return undefined;
        }

        return FileReader.read(xmlUri[0]);
    }
}
