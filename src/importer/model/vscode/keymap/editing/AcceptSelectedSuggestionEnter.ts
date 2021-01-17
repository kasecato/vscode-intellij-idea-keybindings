import { VSCodeCommand } from '../../VSCodeCommand';
import { VSCodeKeyDefault } from '../../VSCodeKeyDefault';

export class AcceptSelectedSuggestionEnter implements VSCodeCommand {
    command = 'acceptSelectedSuggestion';
    when = 'suggestWidgetVisible && textInputFocus';
    keysDefault = [
        new VSCodeKeyDefault('Linux', 'enter'),

        new VSCodeKeyDefault('Mac', 'enter'),

        new VSCodeKeyDefault('Windows', 'enter'),
    ];
}
/*
{
  "key": "enter",
  "command": "acceptSelectedSuggestion",
  "when": "acceptSuggestionOnEnter && suggestWidgetVisible && suggestionMakesTextEdit && textInputFocus"
}
*/
