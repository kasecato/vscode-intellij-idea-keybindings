import { OS } from "../OS";

export class VSCodeKeyDefault {
    os: OS;
    key: string;

    constructor(os: OS, key: string) {
        this.os = os;
        this.key = key;
    }
}
