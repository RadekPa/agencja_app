import * as z from 'zod';
// prettier-ignore
export const tblPersonLoginModelSchema = z.object({
    PersonID: z.number().int(),
    Login: z.string(),
    DateBegin: z.date().nullable(),
    DateEnd: z.date().nullable()
}).strict();

export type tblPersonLoginPureType = z.infer<typeof tblPersonLoginModelSchema>;
