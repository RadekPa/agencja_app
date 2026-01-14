import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tbltiteventsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitEventsScalarWhereInputObjectSchema), z.lazy(() => tblTitEventsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitEventsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitEventsScalarWhereInputObjectSchema), z.lazy(() => tblTitEventsScalarWhereInputObjectSchema).array()]).optional(),
  TitEventID: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'TitEventID' must be a Decimal",
})]).optional(),
  CopyTypeID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  EventCode: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  TitleID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  EventDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  NoOfCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  EndDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tblTitEventsScalarWhereInputObjectSchema: z.ZodType<Prisma.tblTitEventsScalarWhereInput> = tbltiteventsscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblTitEventsScalarWhereInput>;
export const tblTitEventsScalarWhereInputObjectZodSchema = tbltiteventsscalarwhereinputSchema;
