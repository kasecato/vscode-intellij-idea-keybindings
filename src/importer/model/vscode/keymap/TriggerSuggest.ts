import { VSCodeCommand } from "../VSCodeCommand";
import { VSCodeKeyDefault } from "../VSCodeKeyDefault";

export class TriggerSuggest implements VSCodeCommand {
    command = "editor.action.triggerSuggest";
    when = "editorHasCompletionItemProvider && textInputFocus && !editorReadonly";
    keysDefault = [
        new VSCodeKeyDefault("Linux", ["cmd+i", "alt+escape", "ctrl+space"]),
        new VSCodeKeyDefault("Mac", ["cmd+i", "alt+escape", "ctrl+space"]),
        new VSCodeKeyDefault("Windows", ["cmd+i", "alt+escape", "ctrl+space"]),
    ];
}
