import * as z from 'zod';
export const dictTitSubClassGroupByResultSchema = z.array(z.object({
  SubClassCode: z.string(),
  ClassCode: z.string(),
  SubClassDesc: z.string(),
  _count: z.object({
    SubClassCode: z.number(),
    ClassCode: z.number(),
    SubClassDesc: z.number(),
    dictTitMainClass: z.number(),
    tblMailingLists: z.number(),
    tblTitSubClass: z.number()
  }).optional(),
  _min: z.object({
    SubClassCode: z.string().nullable(),
    ClassCode: z.string().nullable(),
    SubClassDesc: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    SubClassCode: z.string().nullable(),
    ClassCode: z.string().nullable(),
    SubClassDesc: z.string().nullable()
  }).nullable().optional()
}));