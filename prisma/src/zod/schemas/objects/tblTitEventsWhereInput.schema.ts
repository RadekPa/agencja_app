import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TblTitlesNullableScalarRelationFilterObjectSchema as TblTitlesNullableScalarRelationFilterObjectSchema } from './TblTitlesNullableScalarRelationFilter.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { DictEventsNullableScalarRelationFilterObjectSchema as DictEventsNullableScalarRelationFilterObjectSchema } from './DictEventsNullableScalarRelationFilter.schema';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './dictEventsWhereInput.schema';
import { DictCopyTypeNullableScalarRelationFilterObjectSchema as DictCopyTypeNullableScalarRelationFilterObjectSchema } from './DictCopyTypeNullableScalarRelationFilter.schema';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './dictCopyTypeWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tbltiteventswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitEventsWhereInputObjectSchema), z.lazy(() => tblTitEventsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitEventsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitEventsWhereInputObjectSchema), z.lazy(() => tblTitEventsWhereInputObjectSchema).array()]).optional(),
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
  EndDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tblTitles: z.union([z.lazy(() => TblTitlesNullableScalarRelationFilterObjectSchema), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional(),
  dictEvents: z.union([z.lazy(() => DictEventsNullableScalarRelationFilterObjectSchema), z.lazy(() => dictEventsWhereInputObjectSchema)]).optional(),
  dictCopyType: z.union([z.lazy(() => DictCopyTypeNullableScalarRelationFilterObjectSchema), z.lazy(() => dictCopyTypeWhereInputObjectSchema)]).optional()
}).strict();
export const tblTitEventsWhereInputObjectSchema: z.ZodType<Prisma.tblTitEventsWhereInput> = tbltiteventswhereinputSchema as unknown as z.ZodType<Prisma.tblTitEventsWhereInput>;
export const tblTitEventsWhereInputObjectZodSchema = tbltiteventswhereinputSchema;
