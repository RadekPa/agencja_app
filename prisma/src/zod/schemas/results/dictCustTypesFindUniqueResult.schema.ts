import * as z from 'zod';
export const dictCustTypesFindUniqueResultSchema = z.nullable(z.object({
  CustTypeID: z.number().int(),
  CustTypeName: z.string(),
  CustTypeDesc: z.string().optional(),
  tblCustTypes: z.array(z.unknown())
}));