import * as z from 'zod';
export const tblPlacesFindManyResultSchema = z.object({
  data: z.array(z.object({
  PlaceID: z.number().int(),
  PlaceDesc: z.string(),
  tblUserAccess: z.array(z.unknown())
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