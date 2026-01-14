import * as z from 'zod';
export const tblTitSubClassAggregateResultSchema = z.object({  _count: z.object({
    SubClassCode: z.number(),
    TitleID: z.number(),
    tblTitles: z.number(),
    dictTitSubClass: z.number()
  }).optional(),
  _sum: z.object({
    TitleID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    TitleID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    SubClassCode: z.string().nullable(),
    TitleID: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    SubClassCode: z.string().nullable(),
    TitleID: z.number().int().nullable()
  }).nullable().optional()});