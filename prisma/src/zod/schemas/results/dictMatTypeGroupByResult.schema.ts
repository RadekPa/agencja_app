import * as z from 'zod';
export const dictMatTypeGroupByResultSchema = z.array(z.object({
  MatTypeID: z.number().int(),
  MatTypeDesc: z.string(),
  MatTypeDescPL: z.string(),
  _count: z.object({
    MatTypeID: z.number(),
    MatTypeDesc: z.number(),
    MatTypeDescPL: z.number()
  }).optional(),
  _sum: z.object({
    MatTypeID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    MatTypeID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    MatTypeID: z.number().int().nullable(),
    MatTypeDesc: z.string().nullable(),
    MatTypeDescPL: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    MatTypeID: z.number().int().nullable(),
    MatTypeDesc: z.string().nullable(),
    MatTypeDescPL: z.string().nullable()
  }).nullable().optional()
}));