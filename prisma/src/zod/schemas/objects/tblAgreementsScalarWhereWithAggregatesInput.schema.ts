import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema as DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblagreementsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAgreementsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblAgreementsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAgreementsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAgreementsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblAgreementsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  AgrID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  CountryID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  LangAbbr: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  TitleID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  CurrID: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  AgrDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  ValidYY: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  PubTermMM: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  MaxNoOfCopies: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  MinNoOfCopies: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Commission: z.union([z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
})]).optional().nullable(),
  ClientReference: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  DateMod: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  GraalAgentID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  GraalShare: z.union([z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'GraalShare' must be a Decimal",
})]).optional().nullable(),
  EstimatedCopyPrice: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  GraalRepresent: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1000)]).optional().nullable(),
  AgrDoc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  CopiesToOwner: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  CopiesToGraal: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  LocalTitle: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  LocalISBN: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(16)]).optional().nullable(),
  LocalPubDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  ClientID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  CommissionMaterials: z.union([z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'CommissionMaterials' must be a Decimal",
})]).optional().nullable(),
  AgentID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  PropID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblAgreementsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblAgreementsScalarWhereWithAggregatesInput> = tblagreementsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblAgreementsScalarWhereWithAggregatesInput>;
export const tblAgreementsScalarWhereWithAggregatesInputObjectZodSchema = tblagreementsscalarwherewithaggregatesinputSchema;
