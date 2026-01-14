import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblTitEventsUpdateManyWithoutDictEventsNestedInputObjectSchema as tblTitEventsUpdateManyWithoutDictEventsNestedInputObjectSchema } from './tblTitEventsUpdateManyWithoutDictEventsNestedInput.schema'

const makeSchema = () => z.object({
  EventCode: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  EventDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsUpdateManyWithoutDictEventsNestedInputObjectSchema).optional()
}).strict();
export const dictEventsUpdateWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.dictEventsUpdateWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUpdateWithoutTblSubmEventsInput>;
export const dictEventsUpdateWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
