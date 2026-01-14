import * as z from 'zod';
export const tblMailingTemplatesGroupByResultSchema = z.array(z.object({
  TempID: z.number().int(),
  TempName: z.string(),
  TempPath: z.string(),
  TempSubject: z.string(),
  _count: z.object({
    TempID: z.number(),
    TempName: z.number(),
    TempPath: z.number(),
    TempSubject: z.number()
  }).optional(),
  _sum: z.object({
    TempID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    TempID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    TempID: z.number().int().nullable(),
    TempName: z.string().nullable(),
    TempPath: z.string().nullable(),
    TempSubject: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    TempID: z.number().int().nullable(),
    TempName: z.string().nullable(),
    TempPath: z.string().nullable(),
    TempSubject: z.string().nullable()
  }).nullable().optional()
}));