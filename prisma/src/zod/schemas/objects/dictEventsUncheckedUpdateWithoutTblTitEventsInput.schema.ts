import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblSubmEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema as tblSubmEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema } from './tblSubmEventsUncheckedUpdateManyWithoutDictEventsNestedInput.schema'

const makeSchema = () => z.object({
  EventCode: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  EventDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblSubmEvents: z.lazy(() => tblSubmEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema).optional()
}).strict();
export const dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictEventsUncheckedUpdateWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUncheckedUpdateWithoutTblTitEventsInput>;
export const dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectZodSchema = makeSchema();
