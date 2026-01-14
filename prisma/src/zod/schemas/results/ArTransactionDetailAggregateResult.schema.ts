import * as z from 'zod';
export const ArTransactionDetailAggregateResultSchema = z.object({  _count: z.object({
    ItemID: z.number(),
    TransactionID: z.number(),
    AccountID: z.number(),
    Amount: z.number(),
    ArTransaction: z.number()
  }).optional(),
  _sum: z.object({
    ItemID: z.number().nullable(),
    TransactionID: z.number().nullable(),
    AccountID: z.number().nullable(),
    Amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    ItemID: z.number().nullable(),
    TransactionID: z.number().nullable(),
    AccountID: z.number().nullable(),
    Amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    ItemID: z.number().int().nullable(),
    TransactionID: z.number().int().nullable(),
    AccountID: z.number().int().nullable(),
    Amount: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    ItemID: z.number().int().nullable(),
    TransactionID: z.number().int().nullable(),
    AccountID: z.number().int().nullable(),
    Amount: z.number().nullable()
  }).nullable().optional()});