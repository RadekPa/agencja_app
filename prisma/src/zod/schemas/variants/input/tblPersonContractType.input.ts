import * as z from 'zod';
// prettier-ignore
export const tblPersonContractTypeInputSchema = z.object({
    CTypeID: z.number().int(),
    CTypeDescr: z.string().optional().nullable()
}).strict();

export type tblPersonContractTypeInputType = z.infer<typeof tblPersonContractTypeInputSchema>;
