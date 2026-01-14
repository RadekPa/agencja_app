import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { dictEventsUpdateOneWithoutTblTitEventsNestedInputObjectSchema as dictEventsUpdateOneWithoutTblTitEventsNestedInputObjectSchema } from './dictEventsUpdateOneWithoutTblTitEventsNestedInput.schema';
import { dictCopyTypeUpdateOneWithoutTblTitEventsNestedInputObjectSchema as dictCopyTypeUpdateOneWithoutTblTitEventsNestedInputObjectSchema } from './dictCopyTypeUpdateOneWithoutTblTitEventsNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  TitEventID: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'TitEventID' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  EventDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  NoOfCopies: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  EndDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictEvents: z.lazy(() => dictEventsUpdateOneWithoutTblTitEventsNestedInputObjectSchema).optional(),
  dictCopyType: z.lazy(() => dictCopyTypeUpdateOneWithoutTblTitEventsNestedInputObjectSchema).optional()
}).strict();
export const tblTitEventsUpdateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpdateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpdateWithoutTblTitlesInput>;
export const tblTitEventsUpdateWithoutTblTitlesInputObjectZodSchema = makeSchema();
