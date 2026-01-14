import * as z from 'zod';
export const dictRightsFormAggregateResultSchema = z.object({  _count: z.object({
    RightFormID: z.number(),
    RightFormDesc: z.number(),
    RightFormPL: z.number(),
    RightFormAbbPL: z.number(),
    RightFormAbbEN: z.number(),
    tblAgrRights: z.number()
  }).optional(),
  _sum: z.object({
    RightFormID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    RightFormID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    RightFormID: z.number().int().nullable(),
    RightFormDesc: z.string().nullable(),
    RightFormPL: z.string().nullable(),
    RightFormAbbPL: z.string().nullable(),
    RightFormAbbEN: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    RightFormID: z.number().int().nullable(),
    RightFormDesc: z.string().nullable(),
    RightFormPL: z.string().nullable(),
    RightFormAbbPL: z.string().nullable(),
    RightFormAbbEN: z.string().nullable()
  }).nullable().optional()});