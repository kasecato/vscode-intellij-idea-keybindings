import { VSCodeKeybindingModel } from "../vscode/VSCodeKeybindingModel";
import { IntelliJAction } from "./IntelliJAction";
import { IntelliJCategory } from "./IntelliJCategory";
import { IntelliJDescription } from "./IntelliJDescription";
import { IntelliJKeymap } from "./IntelliJKeymap";

export interface IntelliJKeybindingModel {

    description: IntelliJDescription;
    category: IntelliJCategory;
    action: IntelliJAction;
    keymaps: Array<IntelliJKeymap>;
    vscodeKeybinding: VSCodeKeybindingModel;

}
