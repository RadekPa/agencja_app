import * as z from 'zod';
export const tblMailingListsAggregateResultSchema = z.object({  _count: z.object({
    ClassCode: z.number(),
    SubClassCode: z.number(),
    CustID: z.number(),
    dictTitMainClass: z.number(),
    dictTitSubClass: z.number(),
    tblCustomers: z.number()
  }).optional(),
  _sum: z.object({
    CustID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CustID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    ClassCode: z.string().nullable(),
    SubClassCode: z.string().nullable(),
    CustID: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    ClassCode: z.string().nullable(),
    SubClassCode: z.string().nullable(),
    CustID: z.number().int().nullable()
  }).nullable().optional()});