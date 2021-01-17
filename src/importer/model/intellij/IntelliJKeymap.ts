import { IntelliJKeystroke } from './IntelliJKeystroke';

export interface IntelliJKeymap {
    actionId: string;
    keystrokesDefault: IntelliJKeystroke[];
}
