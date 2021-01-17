import { IntelliJKeymap } from "../../IntelliJKeymap";
import { IntelliJKeystrokeDefault } from "../../IntelliJKeystrokeDefault";

export class EditorCompleteStatement implements IntelliJKeymap {
    actionId = "EditorCompleteStatement";
    keystrokesDefault = [
        new IntelliJKeystrokeDefault("Linux", "shift meta enter"),
        new IntelliJKeystrokeDefault("Mac", "shift meta enter"),
        new IntelliJKeystrokeDefault("Windows", "shift meta enter"),
    ]
}
