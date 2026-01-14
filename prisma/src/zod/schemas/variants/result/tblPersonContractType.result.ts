import * as z from 'zod';
// prettier-ignore
export const tblPersonContractTypeResultSchema = z.object({
    CTypeID: z.number().int(),
    CTypeDescr: z.string().nullable()
}).strict();

export type tblPersonContractTypeResultType = z.infer<typeof tblPersonContractTypeResultSchema>;
