import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  SubmEventID: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'SubmEventID' must be a Decimal",
}),
  SubmID: z.number().int().optional().nullable(),
  EventDate: z.coerce.date(),
  NoOfCopies: z.number().int().optional().nullable(),
  EndDate: z.coerce.date().optional().nullable()
}).strict();
export const tblSubmEventsCreateManyDictEventsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsCreateManyDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsCreateManyDictEventsInput>;
export const tblSubmEventsCreateManyDictEventsInputObjectZodSchema = makeSchema();
