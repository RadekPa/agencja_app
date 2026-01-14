import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransactionID: z.literal(true).optional(),
  DefaultDocRef: z.literal(true).optional(),
  InvNr: z.literal(true).optional(),
  TransactionDate: z.literal(true).optional(),
  TransactionType: z.literal(true).optional(),
  Currency: z.literal(true).optional(),
  TransactionAmt: z.literal(true).optional(),
  RCustID: z.literal(true).optional(),
  PCustID: z.literal(true).optional(),
  RBalance: z.literal(true).optional(),
  PBalance: z.literal(true).optional(),
  IFTBalance: z.literal(true).optional(),
  GraalBalance: z.literal(true).optional(),
  ClientReference: z.literal(true).optional(),
  OurBankTransRef: z.literal(true).optional(),
  NetDate: z.literal(true).optional(),
  IsChargeInterest: z.literal(true).optional(),
  Notes: z.literal(true).optional(),
  ReversalTransID: z.literal(true).optional(),
  OriginTransID: z.literal(true).optional(),
  EntryDate: z.literal(true).optional(),
  OriginUserID: z.literal(true).optional(),
  ErrorID: z.literal(true).optional(),
  Status: z.literal(true).optional(),
  CreditID: z.literal(true).optional(),
  ApplyID: z.literal(true).optional(),
  TaxCode: z.literal(true).optional(),
  TaxValue: z.literal(true).optional()
}).strict();
export const ArTransactionMinAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionMinAggregateInputType>;
export const ArTransactionMinAggregateInputObjectZodSchema = makeSchema();
