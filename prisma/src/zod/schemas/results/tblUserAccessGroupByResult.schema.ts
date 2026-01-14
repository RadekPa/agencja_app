import * as z from 'zod';
export const tblUserAccessGroupByResultSchema = z.array(z.object({
  Login: z.string(),
  PlaceID: z.number().int(),
  _count: z.object({
    Login: z.number(),
    PlaceID: z.number(),
    tblPlaces: z.number(),
    tblUsers: z.number()
  }).optional(),
  _sum: z.object({
    PlaceID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    PlaceID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    Login: z.string().nullable(),
    PlaceID: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    Login: z.string().nullable(),
    PlaceID: z.number().int().nullable()
  }).nullable().optional()
}));