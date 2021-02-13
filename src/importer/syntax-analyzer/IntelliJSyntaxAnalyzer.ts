import { IntelliJKeymapXML } from '../model/intellij/implement/IntelliJKeymapXML';
import { IntelliJKeymap } from '../model/intellij/IntelliJKeymap';
import { OS } from '../model/OS';
import { ActionIdCommandMapping } from '../model/resource/ActionIdCommandMapping';
import { KeystrokeKeyMapping } from '../model/resource/KeystrokeKeyMapping';
import { VSCodeKeybindingDefault } from '../model/vscode/implement/VSCodeKeybindingDefault';
import { VSCodeKeyLinux } from '../model/vscode/implement/VSCodeKeyLinux';
import { VSCodeKeyMac } from '../model/vscode/implement/VSCodeKeyMac';
import { VSCodeKeyWindows } from '../model/vscode/implement/VSCodeKeyWindows';
import { VSCodeKey } from '../model/vscode/VSCodeKey';
import { VSCodeKeybinding } from '../model/vscode/VSCodeKeybinding';

export class IntelliJSyntaxAnalyzer {
    private static readonly REMOVE_KEYBINDING: string = '-';
    private readonly osDestination: OS;
    private readonly actionIdCommandMappings: { [actionId: string]: readonly ActionIdCommandMapping[] };
    private readonly keystrokeKeyMappings: readonly KeystrokeKeyMapping[];
    private readonly vscodeDefaults: { [commnad: string]: readonly VSCodeKeybinding[] };
    private readonly intellijDefaults: readonly IntelliJKeymapXML[];
    private readonly intellijCustoms: { [actionId: string]: readonly IntelliJKeymapXML[] };

    constructor(
        osDestination: OS,
        actionIdCommandMappings: readonly ActionIdCommandMapping[],
        keystrokeKeyMappings: readonly KeystrokeKeyMapping[],
        vscodeDefaults: readonly VSCodeKeybinding[],
        intellijDefaults: readonly IntelliJKeymapXML[],
        intellijCustoms: readonly IntelliJKeymapXML[],
    ) {
        this.osDestination = osDestination;
        this.actionIdCommandMappings = IntelliJSyntaxAnalyzer.groupBy(actionIdCommandMappings, x => x.intellij);
        this.keystrokeKeyMappings = keystrokeKeyMappings;
        this.vscodeDefaults = IntelliJSyntaxAnalyzer.groupBy(vscodeDefaults, x => x.command);
        this.intellijDefaults = intellijDefaults;
        this.intellijCustoms = IntelliJSyntaxAnalyzer.groupBy(intellijCustoms, x => x.actionId);
    }

    // FIXME: high-cost
    async convert(): Promise<VSCodeKeybinding[]> {
        const vscodeMutable: VSCodeKeybinding[] = [];

        // set custom
        this.action(vscodeMutable, this.addCustomIntelliJ);

        // set default
        this.action(vscodeMutable, undefined, this.addDefaultIntelliJ);

        // remove default
        this.action(vscodeMutable, this.removeDefaultVSCode, this.removeDefaultVSCode);

        // remove default
        this.action(vscodeMutable, this.removeDefaultIntelliJ, this.removeDefaultIntelliJ);

        return vscodeMutable;
    }

    private action(
        vscodeMutable: VSCodeKeybinding[] = [],
        onCustom:
            | ((
                vscodeMutable: VSCodeKeybinding[],
                vscodeDefault: VSCodeKeybinding,
                intellijDefult: IntelliJKeymapXML,
                intellijCustom: IntelliJKeymapXML
            ) => void)
            | undefined,
        onDefault:
            | ((
                vscodeMutable: VSCodeKeybinding[],
                vscodeDefault: VSCodeKeybinding,
                intellijDefault: IntelliJKeymapXML,
                intellijCustom: IntelliJKeymapXML | undefined
            ) => void)
            | undefined = undefined
    ): void {
        // FIXEME: This loop is not correct because it duplicates when there are two defaults. Rewrite when I have time
        for (let intellijDefault of this.intellijDefaults) {
            if (!this.actionIdCommandMappings[intellijDefault.actionId]) {
                continue;
            }
            for (let actionIdCommandMapping of this.actionIdCommandMappings[intellijDefault.actionId]) {
                const actionId = actionIdCommandMapping.intellij;
                const command = actionIdCommandMapping.vscode;
                if (!this.vscodeDefaults[command]) {
                    continue;
                }
                for (let vscodeDefault of this.vscodeDefaults[command]) {
                    if (this.intellijCustoms[actionId]) {
                        if (onCustom) {
                            for (let intellijCustom of this.intellijCustoms[actionId]) {
                                onCustom(vscodeMutable, vscodeDefault, intellijDefault, intellijCustom);
                            }
                        }
                    }
                    else {
                        if (onDefault) {
                            onDefault(vscodeMutable, vscodeDefault, intellijDefault, undefined);
                        }
                    }
                }
            }
        }
    }

    private addCustomIntelliJ = (
        vscodeMutable: VSCodeKeybinding[] = [],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML,
        intellijCustom: IntelliJKeymapXML
    ): void => {
        const key = this.convertToKey(intellijCustom).key;
        const when = vscodeDefault.when;
        const command = vscodeDefault.command;

        const alreadyBinded = vscodeMutable.some(keybinding => keybinding.key === key && keybinding.command === command);
        if (alreadyBinded) {
            return;
        }

        vscodeMutable.push(new VSCodeKeybindingDefault(command, key, when));
    };

    private addDefaultIntelliJ = (
        vscodeMutable: VSCodeKeybinding[],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML
    ): void => {
        const key = this.convertToKey(intellijDefault).key;
        const when = vscodeDefault.when;
        const command = vscodeDefault.command;

        const alreadyBinded = vscodeMutable.some(keybinding => keybinding.key === key && keybinding.command === command);
        if (alreadyBinded) {
            return;
        }
        vscodeMutable.push(new VSCodeKeybindingDefault(command, key, when));
    };

    private removeDefaultVSCode = (
        vscodeMutable: VSCodeKeybinding[],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML,
        intellijCustom: IntelliJKeymapXML | undefined = undefined
    ): void => {
        const key = vscodeDefault.key;
        const command = vscodeDefault.command;

        const alreadyBinded = vscodeMutable.some(
            keybinding => keybinding.key === key && keybinding.command.endsWith(command)
        );
        if (alreadyBinded) {
            return;
        }

        const removedCommand = `${IntelliJSyntaxAnalyzer.REMOVE_KEYBINDING}${command}`;
        vscodeMutable.push(new VSCodeKeybindingDefault(removedCommand, key));
    };

    private removeDefaultIntelliJ = (
        vscodeMutable: VSCodeKeybinding[],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML,
        intellijCustom: IntelliJKeymapXML | undefined = undefined
    ): void => {
        const key = this.convertToKey(intellijDefault).key;
        const command = vscodeDefault.command;

        const alreadyBinded = vscodeMutable.some(
            keybinding => keybinding.key === key && keybinding.command.endsWith(command)
        );
        if (alreadyBinded) {
            return;
        }

        const removedCommand = `${IntelliJSyntaxAnalyzer.REMOVE_KEYBINDING}${command}`;
        vscodeMutable.push(new VSCodeKeybindingDefault(removedCommand, key));
    };

    private convertToKey(intellijKeymap: IntelliJKeymap): VSCodeKey {
        switch (this.osDestination) {
            case 'Linux':
                return new VSCodeKeyLinux(intellijKeymap, this.keystrokeKeyMappings);
            case 'Mac':
                return new VSCodeKeyMac(intellijKeymap, this.keystrokeKeyMappings);
            case 'Windows':
                return new VSCodeKeyWindows(intellijKeymap, this.keystrokeKeyMappings);
        }
    }

    private static groupBy<V>(array: readonly V[], prop: (v: V) => string): { [key: string]: V[] } {
        return array.reduce((groups: { [key: string]: V[] }, item) => {
            const val = prop(item);
            groups[val] = groups[val] ?? [];
            groups[val].push(item);
            return groups;
        }, {});
    }
}
