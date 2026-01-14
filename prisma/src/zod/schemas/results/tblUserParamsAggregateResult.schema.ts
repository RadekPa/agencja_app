import * as z from 'zod';
export const tblUserParamsAggregateResultSchema = z.object({  _count: z.object({
    Login: z.number(),
    Name: z.number(),
    Value: z.number(),
    tblUsers: z.number()
  }).optional(),
  _min: z.object({
    Login: z.string().nullable(),
    Name: z.string().nullable(),
    Value: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    Login: z.string().nullable(),
    Name: z.string().nullable(),
    Value: z.string().nullable()
  }).nullable().optional()});