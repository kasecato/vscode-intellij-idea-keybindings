import { IntelliJKeymap } from "../IntelliJKeymap";
import { IntelliJKeystrokeDefault } from "../IntelliJKeystrokeDefault";

export class CodeCompletion implements IntelliJKeymap {
    actionId = "CodeCompletion";
    keystrokesDefault = [
        new IntelliJKeystrokeDefault("Linux", "ctrl space"),
        new IntelliJKeystrokeDefault("Mac", "ctrl space"),
        new IntelliJKeystrokeDefault("Windows", "ctrl space"),
    ]
}
