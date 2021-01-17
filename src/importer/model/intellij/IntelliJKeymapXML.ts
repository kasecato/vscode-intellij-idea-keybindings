import { OS } from "../OS";

export class IntelliJKeymapXML {
    actionId: string;
    os: OS;
    first: string | undefined;
    second: string | undefined;

    public constructor(
        actionId: string,
        os: OS,
        first: string | undefined = undefined,
        second: string | undefined = undefined
    ) {
        this.actionId = actionId;
        this.os = os;
        this.first = first;
        this.second = second;
    }
}
