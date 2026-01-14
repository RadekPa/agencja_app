import * as z from 'zod';
export const tblSeriesAggregateResultSchema = z.object({  _count: z.object({
    SeriesID: z.number(),
    CustID: z.number(),
    SeriesFullName: z.number(),
    SeriesShortName: z.number(),
    tblCustomers: z.number()
  }).optional(),
  _sum: z.object({
    SeriesID: z.number().nullable(),
    CustID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    SeriesID: z.number().nullable(),
    CustID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    SeriesID: z.number().int().nullable(),
    CustID: z.number().int().nullable(),
    SeriesFullName: z.string().nullable(),
    SeriesShortName: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    SeriesID: z.number().int().nullable(),
    CustID: z.number().int().nullable(),
    SeriesFullName: z.string().nullable(),
    SeriesShortName: z.string().nullable()
  }).nullable().optional()});