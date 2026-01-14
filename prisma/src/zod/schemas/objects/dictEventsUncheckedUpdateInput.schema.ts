import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblSubmEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema as tblSubmEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema } from './tblSubmEventsUncheckedUpdateManyWithoutDictEventsNestedInput.schema';
import { tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema as tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema } from './tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInput.schema'

const makeSchema = () => z.object({
  EventCode: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  EventDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblSubmEvents: z.lazy(() => tblSubmEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema).optional()
}).strict();
export const dictEventsUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictEventsUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUncheckedUpdateInput>;
export const dictEventsUncheckedUpdateInputObjectZodSchema = makeSchema();
