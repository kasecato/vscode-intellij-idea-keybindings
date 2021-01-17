import { VSCodeCommand } from "../VSCodeCommand";
import { VSCodeKeyDefault } from "../VSCodeKeyDefault";

export class TriggerSuggest implements VSCodeCommand {
    command = "editor.action.triggerSuggest";
    when = "editorHasCompletionItemProvider && textInputFocus && !editorReadonly";
    keysDefault = [
        new VSCodeKeyDefault("Linux", "cmd+i"),
        new VSCodeKeyDefault("Linux", "alt+escape"),
        new VSCodeKeyDefault("Linux", "ctrl+space"),

        new VSCodeKeyDefault("Mac", "cmd+i"),
        new VSCodeKeyDefault("Mac", "alt+escape"),
        new VSCodeKeyDefault("Mac", "ctrl+space"),

        new VSCodeKeyDefault("Windows", "cmd+i"),
        new VSCodeKeyDefault("Windows", "alt+escape"),
        new VSCodeKeyDefault("Windows", "ctrl+space"),
    ];
}
/*
{
  "key": "cmd+i",
  "command": "editor.action.triggerSuggest",
  "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly"
}
{
  "key": "alt+escape",
  "command": "editor.action.triggerSuggest",
  "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly"
}
{
  "key": "ctrl+space",
  "command": "editor.action.triggerSuggest",
  "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly"
}
*/
