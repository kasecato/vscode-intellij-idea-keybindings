import { window, workspace, Disposable, TextEditor, TextDocumentContentChangeEvent, WorkspaceConfiguration, commands } from 'vscode';
import { Configuration } from '../Entity/Configuration';
import { Settings, Platform } from './Settings';

export class Commands {

    /*-------------------------------------------------------------------------
     * Field
     *-----------------------------------------------------------------------*/
    public _disposable: Disposable;


    /*-------------------------------------------------------------------------
     * Entry Constructor
     *-----------------------------------------------------------------------*/
    public constructor(settings: Settings) {

        const disposable = commands.registerCommand('intellij.resolveKeybinding', (args: any[]) => {
            switch (settings._platform) {
                case Platform.MAC:
                    this.commandsMac();
                    break;
                case Platform.WIN:
                    this.commandsMac();
                    break;
                case Platform.LINUX:
                    this.commandsMac();
                    break;
                default:
                    this.commandsMac();
                    break;
            }
        });

        this._disposable = Disposable.from(disposable);
    }


    /*-------------------------------------------------------------------------
     * Public Method
     *-----------------------------------------------------------------------*/
    public dispose() {
        this._disposable.dispose();
    }


    /*-------------------------------------------------------------------------
     * Private Method
     *-----------------------------------------------------------------------*/
    private commandsMac() {
        const commandId = 'editor.action.deleteLines';
        commands.executeCommand(commandId);
    }

}
