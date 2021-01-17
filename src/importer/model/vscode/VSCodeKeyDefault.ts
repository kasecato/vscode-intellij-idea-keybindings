import { OS } from "../OS";
import { VSCodeKey } from "./VSCodeKey";

export class VSCodeKeyDefault implements VSCodeKey {
    os: OS;
    keys: string[] = [];

    constructor(os: OS, keys: string[]) {
        this.os = os;
        this.keys = keys;
    }
}
