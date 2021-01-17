import { OS } from "../OS";

export class IntelliJKeymap {
    os: OS;
    action: string;
    first: string | undefined;
    second: string | undefined;

    public constructor(
        os: OS,
        action: string,
        first: string | undefined = undefined,
        second: string | undefined = undefined
    ) {
        this.os = os;
        this.action = action;
        this.first = first;
        this.second = second;
    }
}
