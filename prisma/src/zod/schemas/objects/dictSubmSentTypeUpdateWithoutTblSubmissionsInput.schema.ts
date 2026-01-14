import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  SubmSentType: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeUpdateWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeUpdateWithoutTblSubmissionsInput>;
export const dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
