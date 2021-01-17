import { OS } from '../OS';

export interface IntelliJKeystroke {
    os: OS;
    first: string;
    second: string | undefined;
}
