import * as z from 'zod';
// prettier-ignore
export const tblPersonLoginInputSchema = z.object({
    PersonID: z.number().int(),
    Login: z.string(),
    DateBegin: z.date().optional().nullable(),
    DateEnd: z.date().optional().nullable()
}).strict();

export type tblPersonLoginInputType = z.infer<typeof tblPersonLoginInputSchema>;
