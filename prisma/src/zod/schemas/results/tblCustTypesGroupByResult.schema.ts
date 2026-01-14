import * as z from 'zod';
export const tblCustTypesGroupByResultSchema = z.array(z.object({
  CustID: z.number().int(),
  CustTypeID: z.number().int(),
  _count: z.object({
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
  }).nullable().optional()
}));