import { IntelliJKeystroke } from "./IntelliJKeystroke";

export class IntelliJKeystrokeImpl implements IntelliJKeystroke {

    keystroke: string;

    public constructor(keystroke: string) {
        this.keystroke = keystroke;
    }

}
