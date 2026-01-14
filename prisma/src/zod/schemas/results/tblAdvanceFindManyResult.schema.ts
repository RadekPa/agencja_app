import * as z from 'zod';
export const tblAdvanceFindManyResultSchema = z.object({
  data: z.array(z.object({
  AdvID: z.number().int(),
  Inst: z.number().int(),
  AgrID: z.number().int(),
  AdvTermId: z.number().int().optional(),
  AdvTypeId: z.number().int().optional(),
  Amount: z.number().optional(),
  AdvTermDate: z.date().optional(),
  RoyID: z.number().int().optional(),
  tblAgreements: z.unknown()
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