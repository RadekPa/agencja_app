import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyCreateNestedManyWithoutArTransactionInputObjectSchema as ArApplyCreateNestedManyWithoutArTransactionInputObjectSchema } from './ArApplyCreateNestedManyWithoutArTransactionInput.schema';
import { ArTransactionDetailCreateNestedManyWithoutArTransactionInputObjectSchema as ArTransactionDetailCreateNestedManyWithoutArTransactionInputObjectSchema } from './ArTransactionDetailCreateNestedManyWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  DefaultDocRef: z.string().max(50).optional().nullable(),
  InvNr: z.number().int().optional().nullable(),
  TransactionDate: z.coerce.date().optional().nullable(),
  TransactionType: z.number().int().optional().nullable(),
  Currency: z.string().max(3).optional().nullable(),
  TransactionAmt: z.number().optional().nullable(),
  RCustID: z.number().int().optional().nullable(),
  PCustID: z.number().int().optional().nullable(),
  RBalance: z.number().optional().nullable(),
  PBalance: z.number().optional().nullable(),
  IFTBalance: z.number().optional().nullable(),
  GraalBalance: z.number().optional().nullable(),
  ClientReference: z.string().max(50).optional().nullable(),
  OurBankTransRef: z.string().max(50).optional().nullable(),
  NetDate: z.coerce.date().optional().nullable(),
  IsChargeInterest: z.boolean().optional().nullable(),
  Notes: z.string().optional().nullable(),
  ReversalTransID: z.number().int().optional().nullable(),
  OriginTransID: z.number().int().optional().nullable(),
  EntryDate: z.coerce.date().optional().nullable(),
  OriginUserID: z.string().max(50).optional().nullable(),
  ErrorID: z.number().int().optional().nullable(),
  Status: z.string().max(1).optional().nullable(),
  CreditID: z.number().int().optional().nullable(),
  ApplyID: z.number().int().optional().nullable(),
  TaxCode: z.string().max(1).optional().nullable(),
  TaxValue: z.number().optional().nullable(),
  ArApply: z.lazy(() => ArApplyCreateNestedManyWithoutArTransactionInputObjectSchema).optional(),
  ArTransactionDetail: z.lazy(() => ArTransactionDetailCreateNestedManyWithoutArTransactionInputObjectSchema).optional()
}).strict();
export const ArTransactionCreateWithoutArTransferDetailInputObjectSchema: z.ZodType<Prisma.ArTransactionCreateWithoutArTransferDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionCreateWithoutArTransferDetailInput>;
export const ArTransactionCreateWithoutArTransferDetailInputObjectZodSchema = makeSchema();
