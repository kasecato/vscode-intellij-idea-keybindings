import { window, workspace, Disposable, TextEditor, TextDocumentContentChangeEvent, WorkspaceConfiguration } from 'vscode';
import { Configuration } from '../Entity/Configuration';

export enum Platform {
    MAC,
    WIN,
    LINUX
}

export class Settings {

    /*-------------------------------------------------------------------------
     * Field
     *-----------------------------------------------------------------------*/
    public _disposable: Disposable;
    public _platform: Platform;

    /*-------------------------------------------------------------------------
     * Entry Constructor
     *-----------------------------------------------------------------------*/
    public constructor() {

        /* Load Configuration File (.vscode/settings.json) */
        this.loadConfig();

        const subscriptions: Disposable[] = [];

        /* Add Config File Change Event */
        workspace.onDidChangeConfiguration(() => {
            this.loadConfig();
        }, this, subscriptions);

        this._disposable = Disposable.from(...subscriptions);
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
    private loadConfig() {
        // .vscode/setting.json
        //   { "intellij.keybindings.win": true }
        //   { "intellij.keybindings.mac": false }
        //   { "intellij.keybindings.linux": true }
        const conf: WorkspaceConfiguration = workspace.getConfiguration(Configuration.KEY);
        const mac: boolean = conf.get<boolean>(Configuration.MAC, false);
        const win: boolean = conf.get<boolean>(Configuration.WIN , false);
        const linux: boolean = conf.get<boolean>(Configuration.LINUX , false);

        if (mac) this._platform = Platform.MAC;
        if (win) this._platform = Platform.WIN;
        if (linux) this._platform = Platform.LINUX;
    }

}
