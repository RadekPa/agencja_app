import * as z from 'zod';
export const tblUserParamsGroupByResultSchema = z.array(z.object({
  Login: z.string(),
  Name: z.string(),
  Value: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));