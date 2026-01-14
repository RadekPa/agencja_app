import * as z from 'zod';
export const tblRoyRatesFindManyResultSchema = z.object({
  data: z.array(z.object({
  Step: z.number().int(),
  AgrRightID: z.number().int(),
  AgrID: z.number().int().optional(),
  CpsMax: z.number().int().optional(),
  Rate: z.number().optional(),
  tblAgreements: z.unknown().optional(),
  tblAgrRights: z.unknown()
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