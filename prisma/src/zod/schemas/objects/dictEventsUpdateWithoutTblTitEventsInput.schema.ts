import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblSubmEventsUpdateManyWithoutDictEventsNestedInputObjectSchema as tblSubmEventsUpdateManyWithoutDictEventsNestedInputObjectSchema } from './tblSubmEventsUpdateManyWithoutDictEventsNestedInput.schema'

const makeSchema = () => z.object({
  EventCode: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  EventDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblSubmEvents: z.lazy(() => tblSubmEventsUpdateManyWithoutDictEventsNestedInputObjectSchema).optional()
}).strict();
export const dictEventsUpdateWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictEventsUpdateWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUpdateWithoutTblTitEventsInput>;
export const dictEventsUpdateWithoutTblTitEventsInputObjectZodSchema = makeSchema();
