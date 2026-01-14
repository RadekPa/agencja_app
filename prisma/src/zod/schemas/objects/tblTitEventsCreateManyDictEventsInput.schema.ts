import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


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
  CopyTypeID: z.number().int().optional().nullable(),
  TitleID: z.number().int().optional().nullable(),
  EventDate: z.coerce.date().optional().nullable(),
  NoOfCopies: z.number().int().optional().nullable(),
  EndDate: z.coerce.date().optional().nullable()
}).strict();
export const tblTitEventsCreateManyDictEventsInputObjectSchema: z.ZodType<Prisma.tblTitEventsCreateManyDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsCreateManyDictEventsInput>;
export const tblTitEventsCreateManyDictEventsInputObjectZodSchema = makeSchema();
