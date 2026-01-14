import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubmSentType: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictSubmSentTypeUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeUncheckedUpdateManyInput>;
export const dictSubmSentTypeUncheckedUpdateManyInputObjectZodSchema = makeSchema();
