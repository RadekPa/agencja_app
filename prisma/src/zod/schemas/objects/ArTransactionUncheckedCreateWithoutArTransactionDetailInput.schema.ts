import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema as ArApplyUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema } from './ArApplyUncheckedCreateNestedManyWithoutArTransactionInput.schema';
import { ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema as ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema } from './ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  TransactionID: z.number().int().optional(),
  DefaultDocRef: z.string().optional().nullable(),
  InvNr: z.number().int().optional().nullable(),
  TransactionDate: z.coerce.date().optional().nullable(),
  TransactionType: z.number().int().optional().nullable(),
  Currency: z.string().optional().nullable(),
  TransactionAmt: z.number().optional().nullable(),
  RCustID: z.number().int().optional().nullable(),
  PCustID: z.number().int().optional().nullable(),
  RBalance: z.number().optional().nullable(),
  PBalance: z.number().optional().nullable(),
  IFTBalance: z.number().optional().nullable(),
  GraalBalance: z.number().optional().nullable(),
  ClientReference: z.string().optional().nullable(),
  OurBankTransRef: z.string().optional().nullable(),
  NetDate: z.coerce.date().optional().nullable(),
  IsChargeInterest: z.boolean().optional().nullable(),
  Notes: z.string().optional().nullable(),
  ReversalTransID: z.number().int().optional().nullable(),
  OriginTransID: z.number().int().optional().nullable(),
  EntryDate: z.coerce.date().optional().nullable(),
  OriginUserID: z.string().optional().nullable(),
  ErrorID: z.number().int().optional().nullable(),
  Status: z.string().optional().nullable(),
  CreditID: z.number().int().optional().nullable(),
  ApplyID: z.number().int().optional().nullable(),
  TaxCode: z.string().optional().nullable(),
  TaxValue: z.number().optional().nullable(),
  ArApply: z.lazy(() => ArApplyUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema).optional(),
  ArTransferDetail: z.lazy(() => ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema).optional()
}).strict();
export const ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema: z.ZodType<Prisma.ArTransactionUncheckedCreateWithoutArTransactionDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUncheckedCreateWithoutArTransactionDetailInput>;
export const ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectZodSchema = makeSchema();
