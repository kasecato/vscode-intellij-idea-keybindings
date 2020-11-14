import { IntelliJKeystroke } from "./IntelliJKeystroke";
import { OS } from "../OS";

export class IntelliJKeymap {

    os: OS;
    first: IntelliJKeystroke;
    second: IntelliJKeystroke;

    public constructor(os: OS,first: IntelliJKeystroke,second: IntelliJKeystroke) {
        this.os = os;
        this.first = first;
        this.second = second;
    }

}
