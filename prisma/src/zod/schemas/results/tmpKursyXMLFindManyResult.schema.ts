import * as z from 'zod';
export const tmpKursyXMLFindManyResultSchema = z.object({
  data: z.array(z.object({
  Id: z.number().int(),
  XMLData: z.string().optional(),
  LoadedDateTime: z.date().optional()
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