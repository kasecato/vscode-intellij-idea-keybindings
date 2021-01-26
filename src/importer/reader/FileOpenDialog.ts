import * as vscode from 'vscode';
import { FileReader } from './FileReader';

export type USE_DEFAULT = undefined;

export class FileOpenDialog {

    static async showXml(): Promise<string | USE_DEFAULT> {
        const readerXmlOptions: vscode.OpenDialogOptions = {
            canSelectFiles: true,
            filters: {
                XML: ['xml'],
            },
        };

        const xmlUri = await vscode.window.showOpenDialog(readerXmlOptions);
        if (!xmlUri || !xmlUri[0]) {
            return 'USE_DEFAULT';
        }

        return FileReader.read(xmlUri[0]);
    }
}
