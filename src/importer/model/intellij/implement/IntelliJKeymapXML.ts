import { IntelliJKeymap } from '../IntelliJKeymap';

export class IntelliJKeymapXML implements IntelliJKeymap {
    static readonly INTELLIJ_KEY_DELIMITTER: RegExp = / /g;
    static readonly INTELLIJ_META_KEY: RegExp = /meta/g;

    actionId: string;
    first: string;
    second?: string;

    constructor(actionId: string, first: string, second?: string) {
        this.actionId = actionId;
        this.first = first;
        this.second = second;
    }
}
