import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransactionID: z.literal(true).optional(),
  InvNr: z.literal(true).optional(),
  TransactionType: z.literal(true).optional(),
  TransactionAmt: z.literal(true).optional(),
  RCustID: z.literal(true).optional(),
  PCustID: z.literal(true).optional(),
  RBalance: z.literal(true).optional(),
  PBalance: z.literal(true).optional(),
  IFTBalance: z.literal(true).optional(),
  GraalBalance: z.literal(true).optional(),
  ReversalTransID: z.literal(true).optional(),
  OriginTransID: z.literal(true).optional(),
  ErrorID: z.literal(true).optional(),
  CreditID: z.literal(true).optional(),
  ApplyID: z.literal(true).optional(),
  TaxValue: z.literal(true).optional()
}).strict();
export const ArTransactionSumAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionSumAggregateInputType>;
export const ArTransactionSumAggregateInputObjectZodSchema = makeSchema();
