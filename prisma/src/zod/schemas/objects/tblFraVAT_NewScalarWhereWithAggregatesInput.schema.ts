import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema'

const tblfravat_newscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblFraVAT_NewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblFraVAT_NewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblFraVAT_NewScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblFraVAT_NewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblFraVAT_NewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  FVNr: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  FVDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  FVDateIssued: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  FVType: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  CustID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  OrigCurrency: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  FVCurrency: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  GraalPerc: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  VATCode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  VatPerc: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  NetAmt: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  NetAmtCurr: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  VatAmt: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  XRate: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  VatAmtCurr: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  GrossAmt: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  InvNr: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  InvAmt: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  Title: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(200)]).optional().nullable(),
  ISBNNr: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  PayType: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  InvType: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  FVDescription: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  BilNr: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  OrigFVNr: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  CorrectFVNr: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  CreditID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  ApplyID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  PayDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  EnterDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  EnterEmployee: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(10)]).optional().nullable()
}).strict();
export const tblFraVAT_NewScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblFraVAT_NewScalarWhereWithAggregatesInput> = tblfravat_newscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblFraVAT_NewScalarWhereWithAggregatesInput>;
export const tblFraVAT_NewScalarWhereWithAggregatesInputObjectZodSchema = tblfravat_newscalarwherewithaggregatesinputSchema;
