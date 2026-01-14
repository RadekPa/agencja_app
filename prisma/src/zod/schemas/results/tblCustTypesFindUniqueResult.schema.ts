import * as z from 'zod';
export const tblCustTypesFindUniqueResultSchema = z.nullable(z.object({
  CustID: z.number().int(),
  CustTypeID: z.number().int(),
  dictCustTypes: z.unknown(),
  tblCustomers: z.unknown()
}));