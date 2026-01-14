import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  EventCode: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  EventDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictEventsUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictEventsUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUncheckedUpdateManyInput>;
export const dictEventsUncheckedUpdateManyInputObjectZodSchema = makeSchema();
