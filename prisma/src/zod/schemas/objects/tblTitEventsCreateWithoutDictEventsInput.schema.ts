import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { tblTitlesCreateNestedOneWithoutTblTitEventsInputObjectSchema as tblTitlesCreateNestedOneWithoutTblTitEventsInputObjectSchema } from './tblTitlesCreateNestedOneWithoutTblTitEventsInput.schema';
import { dictCopyTypeCreateNestedOneWithoutTblTitEventsInputObjectSchema as dictCopyTypeCreateNestedOneWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeCreateNestedOneWithoutTblTitEventsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  TitEventID: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'TitEventID' must be a Decimal",
}),
  EventDate: z.coerce.date().optional().nullable(),
  NoOfCopies: z.number().int().optional().nullable(),
  EndDate: z.coerce.date().optional().nullable(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedOneWithoutTblTitEventsInputObjectSchema).optional(),
  dictCopyType: z.lazy(() => dictCopyTypeCreateNestedOneWithoutTblTitEventsInputObjectSchema).optional()
}).strict();
export const tblTitEventsCreateWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblTitEventsCreateWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsCreateWithoutDictEventsInput>;
export const tblTitEventsCreateWithoutDictEventsInputObjectZodSchema = makeSchema();
