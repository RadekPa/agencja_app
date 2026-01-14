import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblagreventsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAgrEventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblAgrEventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAgrEventsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAgrEventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblAgrEventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  AgrEventID: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'AgrEventID' must be a Decimal",
})]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  AgrEventCode: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  EventDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  NoOfCopies: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  EndDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  DateMod: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(30)]).optional().nullable()
}).strict();
export const tblAgrEventsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblAgrEventsScalarWhereWithAggregatesInput> = tblagreventsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblAgrEventsScalarWhereWithAggregatesInput>;
export const tblAgrEventsScalarWhereWithAggregatesInputObjectZodSchema = tblagreventsscalarwherewithaggregatesinputSchema;
