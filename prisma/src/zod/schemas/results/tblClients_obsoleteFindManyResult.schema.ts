import * as z from 'zod';
export const tblClients_obsoleteFindManyResultSchema = z.object({
  data: z.array(z.object({
  CustID: z.number().int(),
  RepModeID: z.number().int().optional(),
  GraalID: z.number().int().optional(),
  Commission: z.number().optional(),
  DefAgrDoc: z.string().optional(),
  Jurisdiction: z.string().optional(),
  tblCustomers: z.unknown(),
  dictRepModes: z.unknown().optional()
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