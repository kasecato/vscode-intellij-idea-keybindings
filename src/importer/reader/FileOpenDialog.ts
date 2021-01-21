import * as vscode from 'vscode';
import { FileReader } from './FileReader';

export class FileOpenDialog {
    static async showXml(): Promise<string> {
        const readerXmlOptions: vscode.OpenDialogOptions = {
            canSelectFiles: true,
            filters: {
                XML: ['xml'],
            },
        };

        const xmlUri = await vscode.window.showOpenDialog(readerXmlOptions);
        if (!xmlUri || !xmlUri[0]) {
            throw Error('Canceled');
        }

        return FileReader.read(xmlUri[0]);
    }
}
