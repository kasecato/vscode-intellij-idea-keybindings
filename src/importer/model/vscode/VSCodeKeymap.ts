import { OS } from "../OS";
import { VSCodeKey } from "./VSCodeKey";

export class VSCodeKeymap {

    os: OS;
    key: VSCodeKey;

    public constructor(os: OS, key: VSCodeKey) {

        this.os = os;
        this.key = key;
    }

}
