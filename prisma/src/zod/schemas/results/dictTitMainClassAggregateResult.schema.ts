import * as z from 'zod';
export const dictTitMainClassAggregateResultSchema = z.object({  _count: z.object({
    ClassCode: z.number(),
    ClassDesc: z.number(),
    dictTitSubClass: z.number(),
    tblMailingLists: z.number(),
    tblTitles: z.number()
  }).optional(),
  _min: z.object({
    ClassCode: z.string().nullable(),
    ClassDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    ClassCode: z.string().nullable(),
    ClassDesc: z.string().nullable()
  }).nullable().optional()});