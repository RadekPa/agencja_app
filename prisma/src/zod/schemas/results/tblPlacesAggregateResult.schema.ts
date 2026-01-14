import * as z from 'zod';
export const tblPlacesAggregateResultSchema = z.object({  _count: z.object({
    PlaceID: z.number(),
    PlaceDesc: z.number(),
    tblUserAccess: z.number()
  }).optional(),
  _sum: z.object({
    PlaceID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    PlaceID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    PlaceID: z.number().int().nullable(),
    PlaceDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    PlaceID: z.number().int().nullable(),
    PlaceDesc: z.string().nullable()
  }).nullable().optional()});