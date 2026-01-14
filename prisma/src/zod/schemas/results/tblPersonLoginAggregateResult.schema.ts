import * as z from 'zod';
export const tblPersonLoginAggregateResultSchema = z.object({  _count: z.object({
    PersonID: z.number(),
    Login: z.number(),
    DateBegin: z.number(),
    DateEnd: z.number()
  }).optional(),
  _sum: z.object({
    PersonID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    PersonID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    PersonID: z.number().int().nullable(),
    Login: z.string().nullable(),
    DateBegin: z.date().nullable(),
    DateEnd: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    PersonID: z.number().int().nullable(),
    Login: z.string().nullable(),
    DateBegin: z.date().nullable(),
    DateEnd: z.date().nullable()
  }).nullable().optional()});