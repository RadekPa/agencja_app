import * as z from 'zod';
// prettier-ignore
export const tblPersonLoginResultSchema = z.object({
    PersonID: z.number().int(),
    Login: z.string(),
    DateBegin: z.date().nullable(),
    DateEnd: z.date().nullable()
}).strict();

export type tblPersonLoginResultType = z.infer<typeof tblPersonLoginResultSchema>;
