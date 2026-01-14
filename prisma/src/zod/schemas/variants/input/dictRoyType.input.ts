import * as z from 'zod';
// prettier-ignore
export const dictRoyTypeInputSchema = z.object({
    RoyTypeID: z.number(),
    AgrRightID: z.number().int().optional().nullable(),
    RoyTypeDesc: z.string(),
    tblAgrRights: z.unknown().optional().nullable()
}).strict();

export type dictRoyTypeInputType = z.infer<typeof dictRoyTypeInputSchema>;
