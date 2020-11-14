export class VSCodeDescription {
    name: string;
    detail: string | null;

    public constructor(name: string, detail: string | null = null) {
        this.name = name;
        this.detail = detail;
    }

}
