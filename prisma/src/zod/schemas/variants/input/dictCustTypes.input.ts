import * as z from 'zod';
// prettier-ignore
export const dictCustTypesInputSchema = z.object({
    CustTypeID: z.number().int(),
    CustTypeName: z.string(),
    CustTypeDesc: z.string().optional().nullable(),
    tblCustTypes: z.array(z.unknown())
}).strict();

export type dictCustTypesInputType = z.infer<typeof dictCustTypesInputSchema>;
