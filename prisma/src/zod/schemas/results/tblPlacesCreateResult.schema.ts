import * as z from 'zod';
export const tblPlacesCreateResultSchema = z.object({
  PlaceID: z.number().int(),
  PlaceDesc: z.string(),
  tblUserAccess: z.array(z.unknown())
});