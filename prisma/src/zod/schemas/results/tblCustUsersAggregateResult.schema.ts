import * as z from 'zod';
export const tblCustUsersAggregateResultSchema = z.object({  _count: z.object({
    CustID: z.number(),
    Login: z.number(),
    tblCustomers: z.number(),
    tblUsers: z.number()
  }).optional(),
  _sum: z.object({
    CustID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CustID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CustID: z.number().int().nullable(),
    Login: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CustID: z.number().int().nullable(),
    Login: z.string().nullable()
  }).nullable().optional()});