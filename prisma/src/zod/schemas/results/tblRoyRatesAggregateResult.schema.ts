import * as z from 'zod';
export const tblRoyRatesAggregateResultSchema = z.object({  _count: z.object({
    Step: z.number(),
    AgrRightID: z.number(),
    AgrID: z.number(),
    CpsMax: z.number(),
    Rate: z.number(),
    tblAgreements: z.number(),
    tblAgrRights: z.number()
  }).optional(),
  _sum: z.object({
    Step: z.number().nullable(),
    AgrRightID: z.number().nullable(),
    AgrID: z.number().nullable(),
    CpsMax: z.number().nullable(),
    Rate: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    Step: z.number().nullable(),
    AgrRightID: z.number().nullable(),
    AgrID: z.number().nullable(),
    CpsMax: z.number().nullable(),
    Rate: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    Step: z.number().int().nullable(),
    AgrRightID: z.number().int().nullable(),
    AgrID: z.number().int().nullable(),
    CpsMax: z.number().int().nullable(),
    Rate: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    Step: z.number().int().nullable(),
    AgrRightID: z.number().int().nullable(),
    AgrID: z.number().int().nullable(),
    CpsMax: z.number().int().nullable(),
    Rate: z.number().nullable()
  }).nullable().optional()});