import * as z from 'zod';
// prettier-ignore
export const dictAdvTypeModelSchema = z.object({
    AdvTypeId: z.number().int(),
    AdvTypeDesc: z.string().nullable(),
    AdvTypeDescPL: z.string().nullable()
}).strict();

export type dictAdvTypePureType = z.infer<typeof dictAdvTypeModelSchema>;
