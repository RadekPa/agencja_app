import * as z from 'zod';
export const tblPlacesFindFirstResultSchema = z.nullable(z.object({
  PlaceID: z.number().int(),
  PlaceDesc: z.string(),
  tblUserAccess: z.array(z.unknown())
}));