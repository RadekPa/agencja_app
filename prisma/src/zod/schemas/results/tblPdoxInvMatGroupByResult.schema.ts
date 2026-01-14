import * as z from 'zod';
export const tblPdoxInvMatGroupByResultSchema = z.array(z.object({
  Invoice_Nr: z.number().int(),
  Title: z.string(),
  ISBN: z.string(),
  _count: z.object({
    Invoice_Nr: z.number(),
    Title: z.number(),
    ISBN: z.number()
  }).optional(),
  _sum: z.object({
    Invoice_Nr: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    Invoice_Nr: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    Invoice_Nr: z.number().int().nullable(),
    Title: z.string().nullable(),
    ISBN: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    Invoice_Nr: z.number().int().nullable(),
    Title: z.string().nullable(),
    ISBN: z.string().nullable()
  }).nullable().optional()
}));