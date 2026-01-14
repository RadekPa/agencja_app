import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema as tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema } from './tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInput.schema'

const makeSchema = () => z.object({
  EventCode: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  EventDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema).optional()
}).strict();
export const dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.dictEventsUncheckedUpdateWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUncheckedUpdateWithoutTblSubmEventsInput>;
export const dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
