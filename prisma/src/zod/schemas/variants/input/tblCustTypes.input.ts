import * as z from 'zod';
// prettier-ignore
export const tblCustTypesInputSchema = z.object({
    CustID: z.number().int(),
    CustTypeID: z.number().int(),
    dictCustTypes: z.unknown(),
    tblCustomers: z.unknown()
}).strict();

export type tblCustTypesInputType = z.infer<typeof tblCustTypesInputSchema>;
