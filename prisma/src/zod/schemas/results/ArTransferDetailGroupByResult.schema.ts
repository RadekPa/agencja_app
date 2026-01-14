import * as z from 'zod';
export const ArTransferDetailGroupByResultSchema = z.array(z.object({
  TransferID: z.number().int(),
  DebitID: z.number().int(),
  AmtWired: z.number(),
  Notes: z.string(),
  _count: z.object({
    TransferID: z.number(),
    DebitID: z.number(),
    AmtWired: z.number(),
    Notes: z.number(),
    ArTransaction: z.number()
  }).optional(),
  _sum: z.object({
    TransferID: z.number().nullable(),
    DebitID: z.number().nullable(),
    AmtWired: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    TransferID: z.number().nullable(),
    DebitID: z.number().nullable(),
    AmtWired: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    TransferID: z.number().int().nullable(),
    DebitID: z.number().int().nullable(),
    AmtWired: z.number().nullable(),
    Notes: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    TransferID: z.number().int().nullable(),
    DebitID: z.number().int().nullable(),
    AmtWired: z.number().nullable(),
    Notes: z.string().nullable()
  }).nullable().optional()
}));