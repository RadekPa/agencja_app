import * as z from 'zod';
export const tblPersonContractTypeFindManyResultSchema = z.object({
  data: z.array(z.object({
  CTypeID: z.number().int(),
  CTypeDescr: z.string().optional()
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