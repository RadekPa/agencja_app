import * as z from 'zod';
// prettier-ignore
export const lkpPayTypeInputSchema = z.object({
    PayTypeID: z.number().int(),
    Description: z.string().optional().nullable(),
    DescriptionPL: z.string().optional().nullable()
}).strict();

export type lkpPayTypeInputType = z.infer<typeof lkpPayTypeInputSchema>;
