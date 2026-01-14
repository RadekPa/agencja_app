import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'

const tblfravat_newwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblFraVAT_NewWhereInputObjectSchema), z.lazy(() => tblFraVAT_NewWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblFraVAT_NewWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblFraVAT_NewWhereInputObjectSchema), z.lazy(() => tblFraVAT_NewWhereInputObjectSchema).array()]).optional(),
  FVNr: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  FVDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  FVDateIssued: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  FVType: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  OrigCurrency: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  FVCurrency: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  GraalPerc: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  VATCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  VatPerc: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  NetAmt: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  NetAmtCurr: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  VatAmt: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  XRate: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  VatAmtCurr: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  GrossAmt: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  InvNr: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  InvAmt: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Title: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(200)]).optional().nullable(),
  ISBNNr: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  PayType: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  InvType: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  FVDescription: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  BilNr: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  OrigFVNr: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CorrectFVNr: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CreditID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  ApplyID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  PayDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  EnterDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  EnterEmployee: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable()
}).strict();
export const tblFraVAT_NewWhereInputObjectSchema: z.ZodType<Prisma.tblFraVAT_NewWhereInput> = tblfravat_newwhereinputSchema as unknown as z.ZodType<Prisma.tblFraVAT_NewWhereInput>;
export const tblFraVAT_NewWhereInputObjectZodSchema = tblfravat_newwhereinputSchema;
