import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblagreventsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema), z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema), z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema).array()]).optional(),
  AgrEventID: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'AgrEventID' must be a Decimal",
})]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  AgrEventCode: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  EventDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  NoOfCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  EndDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  DateMod: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const tblAgrEventsScalarWhereInputObjectSchema: z.ZodType<Prisma.tblAgrEventsScalarWhereInput> = tblagreventsscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblAgrEventsScalarWhereInput>;
export const tblAgrEventsScalarWhereInputObjectZodSchema = tblagreventsscalarwhereinputSchema;
