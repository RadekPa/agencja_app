import * as z from 'zod';
// prettier-ignore
export const dictRoyTypeResultSchema = z.object({
    RoyTypeID: z.number(),
    AgrRightID: z.number().int().nullable(),
    RoyTypeDesc: z.string(),
    tblAgrRights: z.unknown().nullable()
}).strict();

export type dictRoyTypeResultType = z.infer<typeof dictRoyTypeResultSchema>;
