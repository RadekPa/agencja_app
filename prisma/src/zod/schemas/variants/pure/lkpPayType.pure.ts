import * as z from 'zod';
// prettier-ignore
export const lkpPayTypeModelSchema = z.object({
    PayTypeID: z.number().int(),
    Description: z.string().nullable(),
    DescriptionPL: z.string().nullable()
}).strict();

export type lkpPayTypePureType = z.infer<typeof lkpPayTypeModelSchema>;
