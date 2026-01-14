import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { ArApplyListRelationFilterObjectSchema as ArApplyListRelationFilterObjectSchema } from './ArApplyListRelationFilter.schema';
import { ArTransactionDetailListRelationFilterObjectSchema as ArTransactionDetailListRelationFilterObjectSchema } from './ArTransactionDetailListRelationFilter.schema';
import { ArTransferDetailListRelationFilterObjectSchema as ArTransferDetailListRelationFilterObjectSchema } from './ArTransferDetailListRelationFilter.schema'

const artransactionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTransactionWhereInputObjectSchema), z.lazy(() => ArTransactionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTransactionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTransactionWhereInputObjectSchema), z.lazy(() => ArTransactionWhereInputObjectSchema).array()]).optional(),
  TransactionID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  DefaultDocRef: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  InvNr: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  TransactionDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  TransactionType: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Currency: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  TransactionAmt: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RCustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  PCustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  RBalance: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  PBalance: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  IFTBalance: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  GraalBalance: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  ClientReference: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  OurBankTransRef: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  NetDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  IsChargeInterest: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  Notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ReversalTransID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  OriginTransID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  EntryDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  OriginUserID: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  ErrorID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  CreditID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  ApplyID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  TaxCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  TaxValue: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  ArApply: z.lazy(() => ArApplyListRelationFilterObjectSchema).optional(),
  ArTransactionDetail: z.lazy(() => ArTransactionDetailListRelationFilterObjectSchema).optional(),
  ArTransferDetail: z.lazy(() => ArTransferDetailListRelationFilterObjectSchema).optional()
}).strict();
export const ArTransactionWhereInputObjectSchema: z.ZodType<Prisma.ArTransactionWhereInput> = artransactionwhereinputSchema as unknown as z.ZodType<Prisma.ArTransactionWhereInput>;
export const ArTransactionWhereInputObjectZodSchema = artransactionwhereinputSchema;
