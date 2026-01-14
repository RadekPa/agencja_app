import * as z from 'zod';
export const tblMailingListsFindManyResultSchema = z.object({
  data: z.array(z.object({
  ClassCode: z.string(),
  SubClassCode: z.string(),
  CustID: z.number().int(),
  dictTitMainClass: z.unknown(),
  dictTitSubClass: z.unknown(),
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