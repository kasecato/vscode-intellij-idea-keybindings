import { posix } from 'path';
import * as vscode from 'vscode';
import { OS } from '../model/OS';
import { FileReader } from './FileReader';

export class FileReaderDefault {
    private static readonly RESOURCE_PATH: string = 'resource';
    private static readonly DEFAULT_PATH: string = posix.join(FileReaderDefault.RESOURCE_PATH, 'default');

    static async readIntelliJ(osDestination: OS, context: vscode.ExtensionContext): Promise<string> {
        const defaultXmlUri = vscode.Uri.file(
            context.asAbsolutePath(posix.join(this.DEFAULT_PATH, osDestination, 'IntelliJ.xml'))
        );

        return FileReader.read(defaultXmlUri);
    }

    static async readVSCode(osDestination: OS, context: vscode.ExtensionContext): Promise<string> {
        const defaultJsonUri = vscode.Uri.file(
            context.asAbsolutePath(posix.join(this.DEFAULT_PATH, osDestination, 'VSCode.json'))
        );

        return FileReader.read(defaultJsonUri);
    }

    static async readActionIdCommandMapping(context: vscode.ExtensionContext): Promise<string> {
        const defaultJsonUri = vscode.Uri.file(
            context.asAbsolutePath(posix.join(this.RESOURCE_PATH, 'ActionIdCommandMapping.json'))
        );

        return FileReader.read(defaultJsonUri);
    }

    static async readKeystrokeKeyMapping(context: vscode.ExtensionContext): Promise<string> {
        const defaultJsonUri = vscode.Uri.file(
            context.asAbsolutePath(posix.join(this.RESOURCE_PATH, 'KeystrokeKeyMapping.json'))
        );

        return FileReader.read(defaultJsonUri);
    }
}
