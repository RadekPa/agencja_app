import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TblSubmissionsNullableScalarRelationFilterObjectSchema as TblSubmissionsNullableScalarRelationFilterObjectSchema } from './TblSubmissionsNullableScalarRelationFilter.schema';
import { tblSubmissionsWhereInputObjectSchema as tblSubmissionsWhereInputObjectSchema } from './tblSubmissionsWhereInput.schema';
import { DictEventsNullableScalarRelationFilterObjectSchema as DictEventsNullableScalarRelationFilterObjectSchema } from './DictEventsNullableScalarRelationFilter.schema';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './dictEventsWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblsubmeventswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblSubmEventsWhereInputObjectSchema), z.lazy(() => tblSubmEventsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblSubmEventsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblSubmEventsWhereInputObjectSchema), z.lazy(() => tblSubmEventsWhereInputObjectSchema).array()]).optional(),
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
  EndDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  tblSubmissions: z.union([z.lazy(() => TblSubmissionsNullableScalarRelationFilterObjectSchema), z.lazy(() => tblSubmissionsWhereInputObjectSchema)]).optional(),
  dictEvents: z.union([z.lazy(() => DictEventsNullableScalarRelationFilterObjectSchema), z.lazy(() => dictEventsWhereInputObjectSchema)]).optional()
}).strict();
export const tblSubmEventsWhereInputObjectSchema: z.ZodType<Prisma.tblSubmEventsWhereInput> = tblsubmeventswhereinputSchema as unknown as z.ZodType<Prisma.tblSubmEventsWhereInput>;
export const tblSubmEventsWhereInputObjectZodSchema = tblsubmeventswhereinputSchema;
