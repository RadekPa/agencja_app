import * as z from 'zod';
export const tmpKursyXMLAggregateResultSchema = z.object({  _count: z.object({
    Id: z.number(),
    XMLData: z.number(),
    LoadedDateTime: z.number()
  }).optional(),
  _sum: z.object({
    Id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    Id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    Id: z.number().int().nullable(),
    XMLData: z.string().nullable(),
    LoadedDateTime: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    Id: z.number().int().nullable(),
    XMLData: z.string().nullable(),
    LoadedDateTime: z.date().nullable()
  }).nullable().optional()});