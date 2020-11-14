import { IntelliJKeybindingModel } from "../intellij/IntelliJKeybindingModel";
import { VSCodeCommand } from "./VSCodeCommand";
import { VSCodeDescription } from "./VSCodeDescription";
import { VSCodeKeymap } from "./VSCodeKeymap";
import { VSCodeWhen } from "./VSCodeWhen";

export interface VSCodeKeybindingModel {

    description: VSCodeDescription;
    command: VSCodeCommand;
    when: VSCodeWhen;
    keymaps: Array<VSCodeKeymap>;
    intelliJKeybind: IntelliJKeybindingModel;

}
