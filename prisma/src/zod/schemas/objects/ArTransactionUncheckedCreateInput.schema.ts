import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema as ArApplyUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema } from './ArApplyUncheckedCreateNestedManyWithoutArTransactionInput.schema';
import { ArTransactionDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema as ArTransactionDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUncheckedCreateNestedManyWithoutArTransactionInput.schema';
import { ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema as ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema } from './ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  TransactionID: z.number().int().optional(),
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
  ArApply: z.lazy(() => ArApplyUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema).optional(),
  ArTransactionDetail: z.lazy(() => ArTransactionDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema).optional(),
  ArTransferDetail: z.lazy(() => ArTransferDetailUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema).optional()
}).strict();
export const ArTransactionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ArTransactionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUncheckedCreateInput>;
export const ArTransactionUncheckedCreateInputObjectZodSchema = makeSchema();
