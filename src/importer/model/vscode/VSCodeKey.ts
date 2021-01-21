export interface VSCodeKey {
    key: string;
    convert(intellijKeystroke: string): string;
}
