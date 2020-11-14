import { IntelliJKeybindingModel } from "../../intellij/IntelliJKeybindingModel";
import { CodeCompletion } from "../../intellij/keymap/CodeCompletion";
import { OS } from "../../OS";
import { VSCodeCommand } from "../VSCodeCommand";
import { VSCodeDescription } from "../VSCodeDescription";
import { VSCodeKey } from "../VSCodeKey";
import { VSCodeKeybindingModel } from "../VSCodeKeybindingModel";
import { VSCodeKeymap } from "../VSCodeKeymap";
import { VSCodeWhen } from "../VSCodeWhen";

export class TriggerSuggest implements VSCodeKeybindingModel {

    description: VSCodeDescription;
    command: VSCodeCommand;
    when: VSCodeWhen;
    keymaps: Array<VSCodeKeymap>;
    intelliJKeybind: IntelliJKeybindingModel;

    public constructor() {
        this.description = new VSCodeDescription("");
        this.command = new VSCodeCommand("editor.action.triggerSuggest");
        this.when = new VSCodeWhen("editorHasCompletionItemProvider && textInputFocus && !editorReadonly");
        this.keymaps = [
            new VSCodeKeymap(
                OS.Linux,
                new VSCodeKey("ctrl+space"),
            ),
            new VSCodeKeymap(
                OS.Mac,
                new VSCodeKey("ctrl+space"),
            ),
            new VSCodeKeymap(
                OS.Windows,
                new VSCodeKey("ctrl+space"),
            ),
        ];
        this.intelliJKeybind = new CodeCompletion();
    }

}
