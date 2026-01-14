import * as z from 'zod';
// prettier-ignore
export const ArAccountInputSchema = z.object({
    AccountID: z.number().int(),
    AccountDescription: z.string()
}).strict();

export type ArAccountInputType = z.infer<typeof ArAccountInputSchema>;
