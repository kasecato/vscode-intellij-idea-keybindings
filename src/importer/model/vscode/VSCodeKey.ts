import { OS } from "../OS";

export interface VSCodeKey {
    os: OS;
    key: string;
    convert(intellijKeystroke: string): string;
}
