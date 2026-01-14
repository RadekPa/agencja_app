import * as z from 'zod';
// prettier-ignore
export const lkpPayTypeResultSchema = z.object({
    PayTypeID: z.number().int(),
    Description: z.string().nullable(),
    DescriptionPL: z.string().nullable()
}).strict();

export type lkpPayTypeResultType = z.infer<typeof lkpPayTypeResultSchema>;
