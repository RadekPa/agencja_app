import * as z from 'zod';
export const dictAgrEventsFindManyResultSchema = z.object({
  data: z.array(z.object({
  AgrEventCode: z.number().int(),
  AgrEventDesc: z.string(),
  Status: z.string().optional(),
  tblAgrEvents: z.array(z.unknown())
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