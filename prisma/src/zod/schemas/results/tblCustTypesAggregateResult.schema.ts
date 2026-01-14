import * as z from 'zod';
export const tblCustTypesAggregateResultSchema = z.object({  _count: z.object({
    CustID: z.number(),
    CustTypeID: z.number(),
    dictCustTypes: z.number(),
    tblCustomers: z.number()
  }).optional(),
  _sum: z.object({
    CustID: z.number().nullable(),
    CustTypeID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CustID: z.number().nullable(),
    CustTypeID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CustID: z.number().int().nullable(),
    CustTypeID: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    CustID: z.number().int().nullable(),
    CustTypeID: z.number().int().nullable()
  }).nullable().optional()});