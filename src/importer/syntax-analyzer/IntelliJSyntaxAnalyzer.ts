import { IntelliJKeymapXML } from '../model/intellij/implement/IntelliJKeymapXML';
import { IntelliJKeymap } from '../model/intellij/IntelliJKeymap';
import { OS } from '../model/OS';
import { ActionIdCommandMapping } from '../model/resource/ActionIdCommandMapping';
import { KeystrokeKeyMapping } from '../model/resource/KeystrokeKeyMapping';
import { VSCodeKeybindingDefault } from '../model/vscode/implement/VSCodeKeybindingDefault';
import { VSCodeKeyMac } from '../model/vscode/implement/VSCodeKeyMac';
import { VSCodeKey } from '../model/vscode/VSCodeKey';
import { VSCodeKeybinding } from '../model/vscode/VSCodeKeybinding';

export class IntelliJSyntaxAnalyzer {
    private static readonly REMOVE_KEYBINDING: string = '-';
    private readonly osDestination: OS;
    private readonly intellijDefaults: IntelliJKeymapXML[];
    private readonly intellijCustoms: { [actionId: string]: IntelliJKeymapXML[] };
    private readonly vscodeDefaults: { [commnad: string]: VSCodeKeybinding[] };
    private readonly actionIdCommandMappings: { [actionId: string]: ActionIdCommandMapping[] };
    private readonly keystrokeKeyMappings: KeystrokeKeyMapping[];

    constructor(
        osDestination: OS,
        intellijDefaults: IntelliJKeymapXML[],
        intellijCustoms: IntelliJKeymapXML[],
        vscodeDefaults: VSCodeKeybinding[],
        actionIdCommandMappings: ActionIdCommandMapping[],
        keystrokeKeyMappings: KeystrokeKeyMapping[]
    ) {
        this.osDestination = osDestination;
        this.intellijDefaults = intellijDefaults;
        this.intellijCustoms = IntelliJSyntaxAnalyzer.groupBy(intellijCustoms, x => x.actionId);
        this.vscodeDefaults = IntelliJSyntaxAnalyzer.groupBy(vscodeDefaults, x => x.command);
        this.actionIdCommandMappings = IntelliJSyntaxAnalyzer.groupBy(actionIdCommandMappings, x => x.intellij);
        this.keystrokeKeyMappings = keystrokeKeyMappings;
    }

    // FIXME: high-cost
    async convert(): Promise<VSCodeKeybinding[]> {
        const keybindings: VSCodeKeybinding[] = [];

        // set custom
        this.action(keybindings, this.addCustomIntelliJ);

        // set default
        this.action(keybindings, undefined, this.addDefaultIntelliJ);

        // remove default
        this.action(keybindings, this.removeDefaultVSCode, this.removeDefaultVSCode);

        // remove default
        this.action(keybindings, this.removeDefaultIntelliJ, this.removeDefaultIntelliJ);

        return keybindings;
    }

    private action(
        keybindings: VSCodeKeybinding[] = [],
        onCustom:
            | ((
                  keybindings: VSCodeKeybinding[],
                  vscodeDefault: VSCodeKeybinding,
                  intellijDefult: IntelliJKeymapXML,
                  intellijCustom: IntelliJKeymapXML
              ) => void)
            | undefined,
        onDefault:
            | ((
                  keybindings: VSCodeKeybinding[],
                  vscodeDefault: VSCodeKeybinding,
                  intellijDefault: IntelliJKeymapXML,
                  intellijCustom: IntelliJKeymapXML | undefined
              ) => void)
            | undefined = undefined
    ): void {
        this.intellijDefaults.forEach(intellijDefault => {
            if (this.actionIdCommandMappings[intellijDefault.actionId]) {
                this.actionIdCommandMappings[intellijDefault.actionId].forEach(actionIdCommandMapping => {
                    if (this.vscodeDefaults[actionIdCommandMapping.vscode]) {
                        this.vscodeDefaults[actionIdCommandMapping.vscode].forEach(vscodeDefault => {
                            if (this.intellijCustoms[actionIdCommandMapping.intellij]) {
                                if (onCustom) {
                                    this.intellijCustoms[actionIdCommandMapping.intellij].forEach(intellijCustom => {
                                        onCustom(keybindings, vscodeDefault, intellijDefault, intellijCustom);
                                    });
                                }
                            } else {
                                if (onDefault) {
                                    onDefault(keybindings, vscodeDefault, intellijDefault, undefined);
                                }
                            }
                        });
                    }
                });
            }
        });
    }

    private addCustomIntelliJ = (
        keybindings: VSCodeKeybinding[] = [],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML,
        intellijCustom: IntelliJKeymapXML,
    ): void => {
        const key = this.convertToKey(intellijCustom).key;
        const when = vscodeDefault.when;
        const command = vscodeDefault.command;
        keybindings.push(new VSCodeKeybindingDefault(command, key, when));
    };

    private addDefaultIntelliJ = (
        keybindings: VSCodeKeybinding[] = [],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML
    ): void => {
        const key = this.convertToKey(intellijDefault).key;
        const when = vscodeDefault.when;
        const command = vscodeDefault.command;

        const alreadyBinded = keybindings.some(keybinding => keybinding.key === key && keybinding.command === command);
        if (alreadyBinded) {
            return;
        }
        keybindings.push(new VSCodeKeybindingDefault(command, key, when));
    };

    private removeDefaultVSCode = (
        keybindings: VSCodeKeybinding[] = [],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML,
        intellijCustom: IntelliJKeymapXML | undefined = undefined,
    ): void => {
        const key = vscodeDefault.key;
        const command = vscodeDefault.command;

        const alreadyBinded = keybindings.some(
            keybinding => keybinding.key === key && keybinding.command.endsWith(command)
        );
        if (alreadyBinded) {
            return;
        }

        const removedCommand = `${IntelliJSyntaxAnalyzer.REMOVE_KEYBINDING}${command}`;
        keybindings.push(new VSCodeKeybindingDefault(removedCommand, key));
    };

    private removeDefaultIntelliJ = (
        keybindings: VSCodeKeybinding[] = [],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML,
        intellijCustom: IntelliJKeymapXML | undefined = undefined,
    ): void => {
        const key = this.convertToKey(intellijDefault).key;
        const command = vscodeDefault.command;

        const alreadyBinded = keybindings.some(
            keybinding => keybinding.key === key && keybinding.command.endsWith(command)
        );
        if (alreadyBinded) {
            return;
        }

        const removedCommand = `${IntelliJSyntaxAnalyzer.REMOVE_KEYBINDING}${command}`;
        keybindings.push(new VSCodeKeybindingDefault(removedCommand, key));
    };

    private convertToKey(intellijKeymap: IntelliJKeymap): VSCodeKey {
        switch (this.osDestination) {
            case 'Linux':
                return new VSCodeKeyMac(intellijKeymap, this.keystrokeKeyMappings);
            case 'Mac':
                return new VSCodeKeyMac(intellijKeymap, this.keystrokeKeyMappings);
            case 'Windows':
                return new VSCodeKeyMac(intellijKeymap, this.keystrokeKeyMappings);
        }
    }

    static groupBy<V>(array: readonly V[], prop: (v: V) => string): { [key: string]: V[] } {
        return array.reduce((groups: { [key: string]: V[] }, item) => {
            const val = prop(item);
            groups[val] = groups[val] ?? [];
            groups[val].push(item);
            return groups;
        }, {});
    }
}
