import * as z from 'zod';
export const tblCustTypesCreateResultSchema = z.object({
  CustID: z.number().int(),
  CustTypeID: z.number().int(),
  dictCustTypes: z.unknown(),
  tblCustomers: z.unknown()
});