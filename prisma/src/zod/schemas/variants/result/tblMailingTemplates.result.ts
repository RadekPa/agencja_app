import * as z from 'zod';
// prettier-ignore
export const tblMailingTemplatesResultSchema = z.object({
    TempID: z.number().int(),
    TempName: z.string(),
    TempPath: z.string(),
    TempSubject: z.string()
}).strict();

export type tblMailingTemplatesResultType = z.infer<typeof tblMailingTemplatesResultSchema>;
