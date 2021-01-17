import { IntelliJKeymap } from "../IntelliJKeymap";
import { IntelliJKeystrokeDefault } from "../IntelliJKeystrokeDefault";

export class RenameElement implements IntelliJKeymap {
    actionId = "RenameElement";
    keystrokesDefault = [
        new IntelliJKeystrokeDefault("Linux", "shift f6"),
        new IntelliJKeystrokeDefault("Mac", "shift f6"),
        new IntelliJKeystrokeDefault("Windows", "shift f6"),
    ]
}
