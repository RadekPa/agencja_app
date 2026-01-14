import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { tblSubmissionsUpdateOneWithoutTblSubmEventsNestedInputObjectSchema as tblSubmissionsUpdateOneWithoutTblSubmEventsNestedInputObjectSchema } from './tblSubmissionsUpdateOneWithoutTblSubmEventsNestedInput.schema';
import { dictEventsUpdateOneWithoutTblSubmEventsNestedInputObjectSchema as dictEventsUpdateOneWithoutTblSubmEventsNestedInputObjectSchema } from './dictEventsUpdateOneWithoutTblSubmEventsNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  SubmEventID: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'SubmEventID' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  EventDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  NoOfCopies: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  EndDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblSubmissions: z.lazy(() => tblSubmissionsUpdateOneWithoutTblSubmEventsNestedInputObjectSchema).optional(),
  dictEvents: z.lazy(() => dictEventsUpdateOneWithoutTblSubmEventsNestedInputObjectSchema).optional()
}).strict();
export const tblSubmEventsUpdateInputObjectSchema: z.ZodType<Prisma.tblSubmEventsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsUpdateInput>;
export const tblSubmEventsUpdateInputObjectZodSchema = makeSchema();
