import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { tblSubmissionsCreateNestedOneWithoutTblSubmEventsInputObjectSchema as tblSubmissionsCreateNestedOneWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsCreateNestedOneWithoutTblSubmEventsInput.schema';
import { dictEventsCreateNestedOneWithoutTblSubmEventsInputObjectSchema as dictEventsCreateNestedOneWithoutTblSubmEventsInputObjectSchema } from './dictEventsCreateNestedOneWithoutTblSubmEventsInput.schema'

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
  EventDate: z.coerce.date(),
  NoOfCopies: z.number().int().optional().nullable(),
  EndDate: z.coerce.date().optional().nullable(),
  tblSubmissions: z.lazy(() => tblSubmissionsCreateNestedOneWithoutTblSubmEventsInputObjectSchema).optional(),
  dictEvents: z.lazy(() => dictEventsCreateNestedOneWithoutTblSubmEventsInputObjectSchema).optional()
}).strict();
export const tblSubmEventsCreateInputObjectSchema: z.ZodType<Prisma.tblSubmEventsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsCreateInput>;
export const tblSubmEventsCreateInputObjectZodSchema = makeSchema();
