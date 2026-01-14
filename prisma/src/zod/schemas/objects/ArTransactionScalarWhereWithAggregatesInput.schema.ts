import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'

const artransactionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTransactionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArTransactionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTransactionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTransactionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArTransactionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  TransactionID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  DefaultDocRef: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  InvNr: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  TransactionDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  TransactionType: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Currency: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  TransactionAmt: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  RCustID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  PCustID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  RBalance: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  PBalance: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  IFTBalance: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  GraalBalance: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  ClientReference: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  OurBankTransRef: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  NetDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  IsChargeInterest: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  Notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  ReversalTransID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  OriginTransID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  EntryDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  OriginUserID: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  ErrorID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  CreditID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  ApplyID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  TaxCode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  TaxValue: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const ArTransactionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ArTransactionScalarWhereWithAggregatesInput> = artransactionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ArTransactionScalarWhereWithAggregatesInput>;
export const ArTransactionScalarWhereWithAggregatesInputObjectZodSchema = artransactionscalarwherewithaggregatesinputSchema;
