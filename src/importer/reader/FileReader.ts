import { posix } from 'path';
import * as vscode from 'vscode';
import { OS } from '../model/OS';

export class FileReader {
    static async read(uri: vscode.Uri): Promise<string> {
        const readData = await vscode.workspace.fs.readFile(uri);
        return Buffer.from(readData).toString('utf8');
    }
}
