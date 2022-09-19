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
    private readonly actionIdCommandMappings: Record<string, readonly ActionIdCommandMapping[]>;
    private readonly keystrokeKeyMappings: readonly KeystrokeKeyMapping[];
    private readonly vscodeDefaults: Record<string, readonly VSCodeKeybinding[]>;
    private readonly intellijDefaults: readonly IntelliJKeymapXML[];
    private readonly intellijCustoms: Record<string, readonly IntelliJKeymapXML[]>;

    constructor(
        osDestination: OS,
        actionIdCommandMappings: readonly ActionIdCommandMapping[],
        keystrokeKeyMappings: readonly KeystrokeKeyMapping[],
        vscodeDefaults: readonly VSCodeKeybinding[],
        intellijDefaults: readonly IntelliJKeymapXML[],
        intellijCustoms: readonly IntelliJKeymapXML[]
    ) {
        this.osDestination = osDestination;
        this.actionIdCommandMappings = IntelliJSyntaxAnalyzer.groupBy(actionIdCommandMappings, x => x.intellij);
        this.keystrokeKeyMappings = keystrokeKeyMappings;
        this.vscodeDefaults = IntelliJSyntaxAnalyzer.groupBy(vscodeDefaults, x => x.command);
        this.intellijDefaults = intellijDefaults;
        this.intellijCustoms = IntelliJSyntaxAnalyzer.groupBy(intellijCustoms, x => x.actionId);
    }

    // FIXME: high-cost
    convert(): VSCodeKeybinding[] {
        let vscodeMutable: VSCodeKeybinding[] = [];

        // set custom
        const customs = this.action(vscodeMutable, this.addCustomIntelliJ);
        vscodeMutable = vscodeMutable.concat(customs);

        // set default
        const defaults = this.action(vscodeMutable, undefined, this.addDefaultIntelliJ);
        vscodeMutable = vscodeMutable.concat(defaults);

        // remove default
        const removedDefaultsVSCode = this.action(vscodeMutable, this.removeDefaultVSCode, this.removeDefaultVSCode);
        vscodeMutable = vscodeMutable.concat(removedDefaultsVSCode);

        // remove default
        const removedDefaultsIntelliJ = this.action(
            vscodeMutable,
            this.removeDefaultIntelliJ,
            this.removeDefaultIntelliJ
        );
        vscodeMutable = vscodeMutable.concat(removedDefaultsIntelliJ);

        return vscodeMutable;
    }

    private action(
        vscodeImmutable: readonly VSCodeKeybinding[],
        onCustom:
            | ((
                  vscodeImmutable: readonly VSCodeKeybinding[],
                  vscodeDefault: VSCodeKeybinding,
                  intellijDefult: IntelliJKeymapXML,
                  intellijCustom: IntelliJKeymapXML
              ) => VSCodeKeybinding | undefined)
            | undefined,
        onDefault:
            | ((
                  vscodeImmutable: readonly VSCodeKeybinding[],
                  vscodeDefault: VSCodeKeybinding,
                  intellijDefault: IntelliJKeymapXML,
                  intellijCustom: IntelliJKeymapXML | undefined
              ) => VSCodeKeybinding | undefined)
            | undefined = undefined
    ): VSCodeKeybinding[] {
        const vscodeMutable: VSCodeKeybinding[] = [];
        // FIXEME: This loop is not correct because it duplicates when there are two defaults. Rewrite when I have time
        for (const intellijDefault of this.intellijDefaults) {
            if (!this.actionIdCommandMappings[intellijDefault.actionId]) {
                continue;
            }
            for (const actionIdCommandMapping of this.actionIdCommandMappings[intellijDefault.actionId]) {
                const actionId = actionIdCommandMapping.intellij;
                const command = actionIdCommandMapping.vscode;
                if (!this.vscodeDefaults[command]) {
                    continue;
                }
                for (const vscodeDefault of this.vscodeDefaults[command]) {
                    if (this.intellijCustoms[actionId]) {
                        if (onCustom) {
                            for (const intellijCustom of this.intellijCustoms[actionId]) {
                                const keybinding = onCustom(
                                    vscodeMutable.concat(vscodeImmutable),
                                    vscodeDefault,
                                    intellijDefault,
                                    intellijCustom
                                );
                                if (keybinding) {
                                    vscodeMutable.push(keybinding);
                                }
                            }
                        }
                    } else {
                        if (onDefault) {
                            const keybinding = onDefault(
                                vscodeMutable.concat(vscodeImmutable),
                                vscodeDefault,
                                intellijDefault,
                                undefined
                            );
                            if (keybinding) {
                                vscodeMutable.push(keybinding);
                            }
                        }
                    }
                }
            }
        }
        return vscodeMutable;
    }

    private addCustomIntelliJ = (
        vscodeImmutable: readonly VSCodeKeybinding[],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML,
        intellijCustom: IntelliJKeymapXML
    ): VSCodeKeybinding | undefined => {
        const key = this.convertToKey(intellijCustom).key;
        const when = vscodeDefault.when;
        const command = vscodeDefault.command;

        const alreadyBinded = vscodeImmutable.some(
            keybinding => keybinding.key === key && keybinding.command === command && keybinding.when === when
        );
        return alreadyBinded ? undefined : new VSCodeKeybindingDefault(command, key, when);
    };

    private addDefaultIntelliJ = (
        vscodeImmutable: readonly VSCodeKeybinding[],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML
    ): VSCodeKeybinding | undefined => {
        const key = this.convertToKey(intellijDefault).key;
        const when = vscodeDefault.when;
        const command = vscodeDefault.command;

        const alreadyBinded = vscodeImmutable.some(
            keybinding => keybinding.key === key && keybinding.command === command && keybinding.when === when
        );
        return alreadyBinded ? undefined : new VSCodeKeybindingDefault(command, key, when);
    };

    private removeDefaultVSCode = (
        vscodeImmutable: readonly VSCodeKeybinding[],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML,
        intellijCustom: IntelliJKeymapXML | undefined = undefined
    ): VSCodeKeybinding | undefined => {
        const key = vscodeDefault.key;
        const command = vscodeDefault.command;

        const alreadyBinded = vscodeImmutable.some(
            keybinding => keybinding.key === key && keybinding.command.endsWith(command)
        );
        if (alreadyBinded) {
            return undefined;
        }

        const removedCommand = `${IntelliJSyntaxAnalyzer.REMOVE_KEYBINDING}${command}`;
        return new VSCodeKeybindingDefault(removedCommand, key);
    };

    private removeDefaultIntelliJ = (
        vscodeImmutable: readonly VSCodeKeybinding[],
        vscodeDefault: VSCodeKeybinding,
        intellijDefault: IntelliJKeymapXML,
        intellijCustom: IntelliJKeymapXML | undefined = undefined
    ): VSCodeKeybinding | undefined => {
        const key = this.convertToKey(intellijDefault).key;
        const command = vscodeDefault.command;

        const alreadyBinded = vscodeImmutable.some(
            keybinding => keybinding.key === key && keybinding.command.endsWith(command)
        );
        if (alreadyBinded) {
            return undefined;
        }

        const removedCommand = `${IntelliJSyntaxAnalyzer.REMOVE_KEYBINDING}${command}`;
        return new VSCodeKeybindingDefault(removedCommand, key);
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

    private static groupBy<V>(array: readonly V[], prop: (v: V) => string): Record<string, V[]> {
        return array.reduce((groups: Record<string, V[]>, item) => {
            const val = prop(item);
            groups[val] = groups[val] ?? [];
            groups[val].push(item);
            return groups;
        }, {});
    }
}
