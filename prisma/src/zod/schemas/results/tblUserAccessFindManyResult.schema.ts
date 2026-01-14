import * as z from 'zod';
export const tblUserAccessFindManyResultSchema = z.object({
  data: z.array(z.object({
  Login: z.string(),
  PlaceID: z.number().int(),
  tblPlaces: z.unknown(),
  tblUsers: z.unknown()
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