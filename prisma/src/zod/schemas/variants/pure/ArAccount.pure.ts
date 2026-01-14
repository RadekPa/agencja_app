import * as z from 'zod';
// prettier-ignore
export const ArAccountModelSchema = z.object({
    AccountID: z.number().int(),
    AccountDescription: z.string()
}).strict();

export type ArAccountPureType = z.infer<typeof ArAccountModelSchema>;
