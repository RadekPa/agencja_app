import * as z from 'zod';
// prettier-ignore
export const tblMailingTemplatesInputSchema = z.object({
    TempID: z.number().int(),
    TempName: z.string(),
    TempPath: z.string(),
    TempSubject: z.string()
}).strict();

export type tblMailingTemplatesInputType = z.infer<typeof tblMailingTemplatesInputSchema>;
