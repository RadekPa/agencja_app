import * as z from 'zod';
// prettier-ignore
export const tblTitSubClassModelSchema = z.object({
    SubClassCode: z.string(),
    TitleID: z.number().int(),
    tblTitles: z.unknown(),
    dictTitSubClass: z.unknown()
}).strict();

export type tblTitSubClassPureType = z.infer<typeof tblTitSubClassModelSchema>;
