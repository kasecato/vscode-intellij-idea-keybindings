import { VSCodeCommand } from '../VSCodeCommand';
import { VSCodeKeyDefault } from '../VSCodeKeyDefault';

export class Rename implements VSCodeCommand {
    command = 'editor.action.rename';
    when = 'editorHasRenameProvider && editorTextFocus && !editorReadonly';
    keysDefault = [
        new VSCodeKeyDefault('Linux', 'f2'),

        new VSCodeKeyDefault('Mac', 'f2'),

        new VSCodeKeyDefault('Windows', 'f2'),
    ];
}
/*
{
    "key": "f2",
    "command": "editor.action.rename",
    "when": "editorHasRenameProvider && editorTextFocus && !editorReadonly"
}
*/
