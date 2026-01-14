import * as z from 'zod';
export const dictAgrTemplatesGroupByResultSchema = z.array(z.object({
  Name: z.string(),
  FileName: z.string(),
  _count: z.object({
    Name: z.number(),
    FileName: z.number()
  }).optional(),
  _min: z.object({
    Name: z.string().nullable(),
    FileName: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    Name: z.string().nullable(),
    FileName: z.string().nullable()
  }).nullable().optional()
}));