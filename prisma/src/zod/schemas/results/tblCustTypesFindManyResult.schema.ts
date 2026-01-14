import * as z from 'zod';
export const tblCustTypesFindManyResultSchema = z.object({
  data: z.array(z.object({
  CustID: z.number().int(),
  CustTypeID: z.number().int(),
  dictCustTypes: z.unknown(),
  tblCustomers: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});