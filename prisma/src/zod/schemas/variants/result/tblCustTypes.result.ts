import * as z from 'zod';
// prettier-ignore
export const tblCustTypesResultSchema = z.object({
    CustID: z.number().int(),
    CustTypeID: z.number().int(),
    dictCustTypes: z.unknown(),
    tblCustomers: z.unknown()
}).strict();

export type tblCustTypesResultType = z.infer<typeof tblCustTypesResultSchema>;
