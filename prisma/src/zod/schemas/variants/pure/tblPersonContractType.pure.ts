import * as z from 'zod';
// prettier-ignore
export const tblPersonContractTypeModelSchema = z.object({
    CTypeID: z.number().int(),
    CTypeDescr: z.string().nullable()
}).strict();

export type tblPersonContractTypePureType = z.infer<typeof tblPersonContractTypeModelSchema>;
