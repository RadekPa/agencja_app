import * as z from 'zod';
export const tblUserAccessDeleteResultSchema = z.nullable(z.object({
  Login: z.string(),
  PlaceID: z.number().int(),
  tblPlaces: z.unknown(),
  tblUsers: z.unknown()
}));