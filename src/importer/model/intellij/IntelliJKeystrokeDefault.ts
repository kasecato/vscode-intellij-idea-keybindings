import { OS } from '../OS';
import { IntelliJKeystroke } from './IntelliJKeystroke';

export class IntelliJKeystrokeDefault implements IntelliJKeystroke {
    static readonly INTELLIJ_DELIMITTER = / /g;
    static readonly INTELLIJ_META = /meta/g;

    os: OS;
    first: string;
    second: string | undefined;

    constructor(os: OS, first: string, second: string | undefined = undefined) {
        this.os = os;
        this.first = first;
        this.second = second;
    }
}
