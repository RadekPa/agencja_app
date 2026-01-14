import * as z from 'zod';
// prettier-ignore
export const dictRoyTypeModelSchema = z.object({
    RoyTypeID: z.number(),
    AgrRightID: z.number().int().nullable(),
    RoyTypeDesc: z.string(),
    tblAgrRights: z.unknown().nullable()
}).strict();

export type dictRoyTypePureType = z.infer<typeof dictRoyTypeModelSchema>;
