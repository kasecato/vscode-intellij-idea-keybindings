/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ActionIdCommandMapping } from '../model/resource/ActionIdCommandMapping';

export class ActionIdCommandMappingJsonParser {
    static desirialize(json: string): ActionIdCommandMapping[] {
        if (!json) {
            return [];
        }

        const actionIdCommandMappings = new Array<ActionIdCommandMapping>();
        const jsonObj = JSON.parse(json);
        for (let i = 0; i < jsonObj.length; i++) {
            const row = jsonObj[i];
            const actionIdCommandMapping = new ActionIdCommandMapping(row.intellij, row.vscode);
            actionIdCommandMappings.push(actionIdCommandMapping);
        }

        return actionIdCommandMappings;
    }
}
