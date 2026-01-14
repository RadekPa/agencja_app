import * as z from 'zod';
// prettier-ignore
export const dictCustTypesModelSchema = z.object({
    CustTypeID: z.number().int(),
    CustTypeName: z.string(),
    CustTypeDesc: z.string().nullable(),
    tblCustTypes: z.array(z.unknown())
}).strict();

export type dictCustTypesPureType = z.infer<typeof dictCustTypesModelSchema>;
