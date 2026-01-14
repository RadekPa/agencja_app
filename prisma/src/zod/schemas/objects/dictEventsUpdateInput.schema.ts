import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblSubmEventsUpdateManyWithoutDictEventsNestedInputObjectSchema as tblSubmEventsUpdateManyWithoutDictEventsNestedInputObjectSchema } from './tblSubmEventsUpdateManyWithoutDictEventsNestedInput.schema';
import { tblTitEventsUpdateManyWithoutDictEventsNestedInputObjectSchema as tblTitEventsUpdateManyWithoutDictEventsNestedInputObjectSchema } from './tblTitEventsUpdateManyWithoutDictEventsNestedInput.schema'

const makeSchema = () => z.object({
  EventCode: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  EventDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblSubmEvents: z.lazy(() => tblSubmEventsUpdateManyWithoutDictEventsNestedInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsUpdateManyWithoutDictEventsNestedInputObjectSchema).optional()
}).strict();
export const dictEventsUpdateInputObjectSchema: z.ZodType<Prisma.dictEventsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUpdateInput>;
export const dictEventsUpdateInputObjectZodSchema = makeSchema();
