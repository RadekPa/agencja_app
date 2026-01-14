import * as z from 'zod';
export const tblUserAccessCreateResultSchema = z.object({
  Login: z.string(),
  PlaceID: z.number().int(),
  tblPlaces: z.unknown(),
  tblUsers: z.unknown()
});