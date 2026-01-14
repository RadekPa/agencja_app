import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblcustomersscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustomersScalarWhereInputObjectSchema), z.lazy(() => tblCustomersScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustomersScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustomersScalarWhereInputObjectSchema), z.lazy(() => tblCustomersScalarWhereInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Account: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CountryID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Address1: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Address2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  City: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Zip: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  StateAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  DefaultPhone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  DefaultFax: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  DefaultEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  DefaultWWW: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ParentCustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  LangAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  DateMod: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  TaxID: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  VATID: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  RepModeID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  GraalID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Commission: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
})]).optional().nullable(),
  DefAgrDoc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Jurisdiction: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  CommissionForeign: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionForeign' must be a Decimal",
})]).optional().nullable(),
  CommissionMaterials: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionMaterials' must be a Decimal",
})]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const tblCustomersScalarWhereInputObjectSchema: z.ZodType<Prisma.tblCustomersScalarWhereInput> = tblcustomersscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblCustomersScalarWhereInput>;
export const tblCustomersScalarWhereInputObjectZodSchema = tblcustomersscalarwhereinputSchema;
