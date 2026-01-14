import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubmSentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInput>;
export const dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
