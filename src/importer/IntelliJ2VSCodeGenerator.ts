import { IntelliJKeybindingModel } from "./model/intellij/IntelliJKeybindingModel";
import { CodeCompletion } from "./model/intellij/keymap/CodeCompletion";
import { OS } from "./model/OS";

export class IntelliJ2VSCodeGenerator {

    public all(os: OS): string {
        const keybindings: Array<IntelliJKeybindingModel> = [
            new CodeCompletion(),
        ];
        return "";
    }

    private static toVSCodeKeybinding(keybind: IntelliJKeybindingModel) {

    }
}