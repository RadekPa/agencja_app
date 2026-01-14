import * as z from 'zod';
export const tblPersonContractTypeGroupByResultSchema = z.array(z.object({
  CTypeID: z.number().int(),
  CTypeDescr: z.string(),
  _count: z.object({
    CTypeID: z.number(),
    CTypeDescr: z.number()
  }).optional(),
  _sum: z.object({
    CTypeID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CTypeID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CTypeID: z.number().int().nullable(),
    CTypeDescr: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CTypeID: z.number().int().nullable(),
    CTypeDescr: z.string().nullable()
  }).nullable().optional()
}));