import { ExtensionContext, commands } from 'vscode';
import {Settings} from './controller/Settings';
import { Commands } from './Controller/Commands';

export function activate(context: ExtensionContext) {
    const settings = new Settings();
    context.subscriptions.push(settings);

    const command = new Commands(settings);
    context.subscriptions.push(settings);

}
