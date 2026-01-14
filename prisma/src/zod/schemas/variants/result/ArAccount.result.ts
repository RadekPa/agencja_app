import * as z from 'zod';
// prettier-ignore
export const ArAccountResultSchema = z.object({
    AccountID: z.number().int(),
    AccountDescription: z.string()
}).strict();

export type ArAccountResultType = z.infer<typeof ArAccountResultSchema>;
