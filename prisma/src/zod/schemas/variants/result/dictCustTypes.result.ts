import * as z from 'zod';
// prettier-ignore
export const dictCustTypesResultSchema = z.object({
    CustTypeID: z.number().int(),
    CustTypeName: z.string(),
    CustTypeDesc: z.string().nullable(),
    tblCustTypes: z.array(z.unknown())
}).strict();

export type dictCustTypesResultType = z.infer<typeof dictCustTypesResultSchema>;
