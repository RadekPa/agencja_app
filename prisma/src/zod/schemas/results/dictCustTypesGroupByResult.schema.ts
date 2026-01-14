import * as z from 'zod';
export const dictCustTypesGroupByResultSchema = z.array(z.object({
  CustTypeID: z.number().int(),
  CustTypeName: z.string(),
  CustTypeDesc: z.string(),
  _count: z.object({
    CustTypeID: z.number(),
    CustTypeName: z.number(),
    CustTypeDesc: z.number(),
    tblCustTypes: z.number()
  }).optional(),
  _sum: z.object({
    CustTypeID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CustTypeID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CustTypeID: z.number().int().nullable(),
    CustTypeName: z.string().nullable(),
    CustTypeDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CustTypeID: z.number().int().nullable(),
    CustTypeName: z.string().nullable(),
    CustTypeDesc: z.string().nullable()
  }).nullable().optional()
}));