import { ActionIdCommandMapping } from '../model/resource/ActionIdCommandMapping';
import { KeystrokeKeyMapping } from '../model/resource/KeystrokeKeyMapping';

export class KeystrokeKeyMappingJsonParser {
    static async desirialize(json: any): Promise<KeystrokeKeyMapping[]> {
        if (!json) {
            return [];
        }

        const keystrokeKeyMappings = new Array<KeystrokeKeyMapping>();
        const jsonObj = JSON.parse(json);
        for (let i = 0; i < jsonObj.length; i++) {
            const row = jsonObj[i];
            const keystrokeKeyMapping = new KeystrokeKeyMapping(row.intellij, row.vscode);
            keystrokeKeyMappings.push(keystrokeKeyMapping);
        }

        return keystrokeKeyMappings;
    }
}
