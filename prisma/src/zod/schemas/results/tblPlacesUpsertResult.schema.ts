import * as z from 'zod';
export const tblPlacesUpsertResultSchema = z.object({
  PlaceID: z.number().int(),
  PlaceDesc: z.string(),
  tblUserAccess: z.array(z.unknown())
});