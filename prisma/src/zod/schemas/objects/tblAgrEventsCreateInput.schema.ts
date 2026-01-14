import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { tblAgreementsCreateNestedOneWithoutTblAgrEventsInputObjectSchema as tblAgreementsCreateNestedOneWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsCreateNestedOneWithoutTblAgrEventsInput.schema';
import { dictAgrEventsCreateNestedOneWithoutTblAgrEventsInputObjectSchema as dictAgrEventsCreateNestedOneWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsCreateNestedOneWithoutTblAgrEventsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  AgrEventID: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'AgrEventID' must be a Decimal",
}),
  EventDate: z.coerce.date().optional().nullable(),
  NoOfCopies: z.number().int().optional().nullable(),
  EndDate: z.coerce.date().optional().nullable(),
  DateMod: z.coerce.date().optional().nullable(),
  UserMod: z.string().max(30).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedOneWithoutTblAgrEventsInputObjectSchema).optional(),
  dictAgrEvents: z.lazy(() => dictAgrEventsCreateNestedOneWithoutTblAgrEventsInputObjectSchema).optional()
}).strict();
export const tblAgrEventsCreateInputObjectSchema: z.ZodType<Prisma.tblAgrEventsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsCreateInput>;
export const tblAgrEventsCreateInputObjectZodSchema = makeSchema();
