import * as z from 'zod';
export const dictRepModesFindManyResultSchema = z.object({
  data: z.array(z.object({
  RepModeID: z.number().int(),
  RepModeDesc: z.string(),
  tblClients_obsolete: z.array(z.unknown())
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