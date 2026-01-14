import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tbltiteventsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitEventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTitEventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitEventsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitEventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTitEventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  TitEventID: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'TitEventID' must be a Decimal",
})]).optional(),
  CopyTypeID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  EventCode: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  TitleID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  EventDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  NoOfCopies: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  EndDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tblTitEventsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblTitEventsScalarWhereWithAggregatesInput> = tbltiteventsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblTitEventsScalarWhereWithAggregatesInput>;
export const tblTitEventsScalarWhereWithAggregatesInputObjectZodSchema = tbltiteventsscalarwherewithaggregatesinputSchema;
