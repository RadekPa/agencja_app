import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TransactionID: SortOrderSchema.optional(),
  DefaultDocRef: SortOrderSchema.optional(),
  InvNr: SortOrderSchema.optional(),
  TransactionDate: SortOrderSchema.optional(),
  TransactionType: SortOrderSchema.optional(),
  Currency: SortOrderSchema.optional(),
  TransactionAmt: SortOrderSchema.optional(),
  RCustID: SortOrderSchema.optional(),
  PCustID: SortOrderSchema.optional(),
  RBalance: SortOrderSchema.optional(),
  PBalance: SortOrderSchema.optional(),
  IFTBalance: SortOrderSchema.optional(),
  GraalBalance: SortOrderSchema.optional(),
  ClientReference: SortOrderSchema.optional(),
  OurBankTransRef: SortOrderSchema.optional(),
  NetDate: SortOrderSchema.optional(),
  IsChargeInterest: SortOrderSchema.optional(),
  Notes: SortOrderSchema.optional(),
  ReversalTransID: SortOrderSchema.optional(),
  OriginTransID: SortOrderSchema.optional(),
  EntryDate: SortOrderSchema.optional(),
  OriginUserID: SortOrderSchema.optional(),
  ErrorID: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional(),
  CreditID: SortOrderSchema.optional(),
  ApplyID: SortOrderSchema.optional(),
  TaxCode: SortOrderSchema.optional(),
  TaxValue: SortOrderSchema.optional()
}).strict();
export const ArTransactionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionMaxOrderByAggregateInput>;
export const ArTransactionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
