import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblsubmeventsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblSubmEventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblSubmEventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblSubmEventsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblSubmEventsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblSubmEventsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  SubmEventID: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'SubmEventID' must be a Decimal",
})]).optional(),
  SubmID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  EventCode: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  EventDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  NoOfCopies: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  EndDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tblSubmEventsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblSubmEventsScalarWhereWithAggregatesInput> = tblsubmeventsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblSubmEventsScalarWhereWithAggregatesInput>;
export const tblSubmEventsScalarWhereWithAggregatesInputObjectZodSchema = tblsubmeventsscalarwherewithaggregatesinputSchema;
