export const OSArray = ['Linux', 'Mac', 'Windows'] as const;
export type OS = typeof OSArray[number];
