import * as vscode from 'vscode';
import { posix } from 'path';
import * as parser from 'fast-xml-parser';
import { CodeCompletion } from './importer/model/intellij/keymap/CodeCompletion';

export function activate(context: vscode.ExtensionContext) {

    vscode.commands.registerCommand('IntelliJ/importFile', async function () {

        if (!vscode.workspace.workspaceFolders) {
            return vscode.window.showInformationMessage('No folder or workspace opened');
        }

        // const writeStr = '1€ is 1.12$ is 0.9£';
        // const writeData = Buffer.from(writeStr, 'utf8');
        // await vscode.workspace.fs.writeFile(fileUri, writeData);

        const folderUri = vscode.workspace.workspaceFolders[0].uri;
        const fileUri = folderUri.with({ path: posix.join(folderUri.path, 'macOS.xml') });

        const readData = await vscode.workspace.fs.readFile(fileUri);
        const readStr = Buffer.from(readData).toString('utf8');

        const options = {
            ignoreAttributes : false
        };
        try {
            const jsonObj = parser.parse(readStr, options);
            vscode.window.showInformationMessage(jsonObj);
        } catch (error) {
            console.log(error.message);
        }

        vscode.window.showTextDocument(fileUri);
    });
}
