import { IntelliJKeystroke } from "./IntelliJKeystroke";
import { OS } from "../OS";

export class IntelliJKeymap implements IntelliJKeymap {

    os: OS;
    first: IntelliJKeystroke;
    second: IntelliJKeystroke | null;

    public constructor(os: OS, first: IntelliJKeystroke, second: IntelliJKeystroke | null = null) {
        this.os = os;
        this.first = first;
        this.second = second;
    }

}
