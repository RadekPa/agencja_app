import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblAgreementsNullableScalarRelationFilterObjectSchema as TblAgreementsNullableScalarRelationFilterObjectSchema } from './TblAgreementsNullableScalarRelationFilter.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { DictAgrEventsNullableScalarRelationFilterObjectSchema as DictAgrEventsNullableScalarRelationFilterObjectSchema } from './DictAgrEventsNullableScalarRelationFilter.schema';
import { dictAgrEventsWhereInputObjectSchema as dictAgrEventsWhereInputObjectSchema } from './dictAgrEventsWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblagreventswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAgrEventsWhereInputObjectSchema), z.lazy(() => tblAgrEventsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAgrEventsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAgrEventsWhereInputObjectSchema), z.lazy(() => tblAgrEventsWhereInputObjectSchema).array()]).optional(),
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
  UserMod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  tblAgreements: z.union([z.lazy(() => TblAgreementsNullableScalarRelationFilterObjectSchema), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  dictAgrEvents: z.union([z.lazy(() => DictAgrEventsNullableScalarRelationFilterObjectSchema), z.lazy(() => dictAgrEventsWhereInputObjectSchema)]).optional()
}).strict();
export const tblAgrEventsWhereInputObjectSchema: z.ZodType<Prisma.tblAgrEventsWhereInput> = tblagreventswhereinputSchema as unknown as z.ZodType<Prisma.tblAgrEventsWhereInput>;
export const tblAgrEventsWhereInputObjectZodSchema = tblagreventswhereinputSchema;
