import * as z from 'zod';
export const tblTitAuxAggregateResultSchema = z.object({  _count: z.object({
    TitleID: z.number(),
    CopyrightLine: z.number(),
    tblTitles: z.number()
  }).optional(),
  _sum: z.object({
    TitleID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    TitleID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    TitleID: z.number().int().nullable(),
    CopyrightLine: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    TitleID: z.number().int().nullable(),
    CopyrightLine: z.string().nullable()
  }).nullable().optional()});