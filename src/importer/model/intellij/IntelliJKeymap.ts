import { IntelliJKeystroke } from "./IntelliJKeystroke";
import { OS } from "../OS";

export interface IntelliJKeymap {

    os: OS;
    first: IntelliJKeystroke;
    second: IntelliJKeystroke | null;

}
