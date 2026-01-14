import * as z from 'zod';
// prettier-ignore
export const tblCustTypesModelSchema = z.object({
    CustID: z.number().int(),
    CustTypeID: z.number().int(),
    dictCustTypes: z.unknown(),
    tblCustomers: z.unknown()
}).strict();

export type tblCustTypesPureType = z.infer<typeof tblCustTypesModelSchema>;
