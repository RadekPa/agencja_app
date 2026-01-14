import * as z from 'zod';
export const tblCustUsersFindManyResultSchema = z.object({
  data: z.array(z.object({
  CustID: z.number().int(),
  Login: z.string(),
  tblCustomers: z.unknown(),
  tblUsers: z.unknown()
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