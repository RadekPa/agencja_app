import * as z from 'zod';
export const ArVatAggregateResultSchema = z.object({  _count: z.object({
    VatCode: z.number(),
    Description: z.number(),
    VatRate: z.number(),
    DescriptionPL: z.number()
  }).optional(),
  _sum: z.object({
    VatRate: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    VatRate: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    VatCode: z.string().nullable(),
    Description: z.string().nullable(),
    VatRate: z.number().nullable(),
    DescriptionPL: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    VatCode: z.string().nullable(),
    Description: z.string().nullable(),
    VatRate: z.number().nullable(),
    DescriptionPL: z.string().nullable()
  }).nullable().optional()});