import { OS } from "../../OS";
import { TriggerSuggest } from "../../vscode/keymap/TriggerSuggest";
import { VSCodeKeybindingModel } from "../../vscode/VSCodeKeybindingModel";
import { IntelliJAction } from "../IntelliJAction";
import { IntelliJCategory } from "../IntelliJCategory";
import { IntelliJDescription } from "../IntelliJDescription";
import { IntelliJKeybindingModel } from "../IntelliJKeybindingModel";
import { IntelliJKeymap } from "../IntelliJKeymap";
import { IntelliJKeystroke } from "../IntelliJKeystroke";

export class CodeCompletion implements IntelliJKeybindingModel {

    description: IntelliJDescription;
    category: IntelliJCategory;
    action: IntelliJAction;
    keymaps: Array<IntelliJKeymap>;
    vscodeKeybinding: VSCodeKeybindingModel;

    public constructor() {
        this.description = new IntelliJDescription("Code Complition (Basic)", "Complete code");
        this.category = IntelliJCategory.EditorAction;
        this.action = new IntelliJAction("CodeCompletion");

        this.keymaps = [
            new IntelliJKeymap(
                OS.Linux,
                new IntelliJKeystroke("ctrl space"),
                new IntelliJKeystroke(),
            ),
            new IntelliJKeymap(
                OS.Mac,
                new IntelliJKeystroke("ctrl space"),
                new IntelliJKeystroke(),
            ),
            new IntelliJKeymap(
                OS.Windows,
                new IntelliJKeystroke("ctrl space"),
                new IntelliJKeystroke(),
            ),
        ];

        this.vscodeKeybinding = new TriggerSuggest();
    }

}
