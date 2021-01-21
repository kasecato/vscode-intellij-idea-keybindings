import * as vscode from 'vscode';

export class FileSaveDialog {
    static async saveJson(json: string) {
        const writerOptions: vscode.SaveDialogOptions = {
            filters: {
                JSON: ['json'],
            },
        };
        const writerUri = await vscode.window.showSaveDialog(writerOptions);
        if (!writerUri) {
            return;
        }
        const writeData = Buffer.from(json, 'utf8');
        await vscode.workspace.fs.writeFile(writerUri, writeData);
    }
}
