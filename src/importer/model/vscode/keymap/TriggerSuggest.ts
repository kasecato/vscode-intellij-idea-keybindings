import { VSCodeCommand } from "../VSCodeCommand";

export class TriggerSuggest implements VSCodeCommand {

    command = "editor.action.triggerSuggest";
    when = "editorHasCompletionItemProvider && textInputFocus && !editorReadonly";

}
