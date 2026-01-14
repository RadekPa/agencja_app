import * as z from 'zod';
export const dictCustTypesFindManyResultSchema = z.object({
  data: z.array(z.object({
  CustTypeID: z.number().int(),
  CustTypeName: z.string(),
  CustTypeDesc: z.string().optional(),
  tblCustTypes: z.array(z.unknown())
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