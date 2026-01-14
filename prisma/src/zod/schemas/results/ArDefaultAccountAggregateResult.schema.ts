import * as z from 'zod';
export const ArDefaultAccountAggregateResultSchema = z.object({  _count: z.object({
    TransactionType: z.number(),
    DefaultDebitAccount: z.number(),
    DefaultCreditAccount: z.number()
  }).optional(),
  _sum: z.object({
    TransactionType: z.number().nullable(),
    DefaultDebitAccount: z.number().nullable(),
    DefaultCreditAccount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    TransactionType: z.number().nullable(),
    DefaultDebitAccount: z.number().nullable(),
    DefaultCreditAccount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    TransactionType: z.number().int().nullable(),
    DefaultDebitAccount: z.number().int().nullable(),
    DefaultCreditAccount: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    TransactionType: z.number().int().nullable(),
    DefaultDebitAccount: z.number().int().nullable(),
    DefaultCreditAccount: z.number().int().nullable()
  }).nullable().optional()});