import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblsubmeventsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema), z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema), z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema).array()]).optional(),
  SubmEventID: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'SubmEventID' must be a Decimal",
})]).optional(),
  SubmID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  EventCode: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  EventDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  NoOfCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  EndDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tblSubmEventsScalarWhereInputObjectSchema: z.ZodType<Prisma.tblSubmEventsScalarWhereInput> = tblsubmeventsscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblSubmEventsScalarWhereInput>;
export const tblSubmEventsScalarWhereInputObjectZodSchema = tblsubmeventsscalarwhereinputSchema;
