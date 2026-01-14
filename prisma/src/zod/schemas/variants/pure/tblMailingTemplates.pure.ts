import * as z from 'zod';
// prettier-ignore
export const tblMailingTemplatesModelSchema = z.object({
    TempID: z.number().int(),
    TempName: z.string(),
    TempPath: z.string(),
    TempSubject: z.string()
}).strict();

export type tblMailingTemplatesPureType = z.infer<typeof tblMailingTemplatesModelSchema>;
