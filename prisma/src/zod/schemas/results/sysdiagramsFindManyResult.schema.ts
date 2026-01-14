import * as z from 'zod';
export const sysdiagramsFindManyResultSchema = z.object({
  data: z.array(z.object({
  name: z.string(),
  principal_id: z.number().int(),
  diagram_id: z.number().int(),
  version: z.number().int().optional(),
  definition: z.instanceof(Uint8Array).optional()
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