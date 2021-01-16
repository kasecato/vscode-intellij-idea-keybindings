import { IntelliJKeystroke } from "../intellij/IntelliJKeystroke";
import { VSCodeKey } from "./VSCodeKey";

export class VSCodeKeyLinux implements VSCodeKey {

    key: string;

    constructor(first: IntelliJKeystroke, second: IntelliJKeystroke | undefined) {
        this.key = this.convert(first);
        if (second) {
            this.key += " " + this.convert(second);
        }
    }

    private convert(intelliJ: IntelliJKeystroke): string {
        return intelliJ.keystroke
            .replace(/ /gi, "+");
    }

}
