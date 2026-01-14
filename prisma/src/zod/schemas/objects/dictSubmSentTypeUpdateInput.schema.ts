import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblSubmissionsUpdateManyWithoutDictSubmSentTypeNestedInputObjectSchema as tblSubmissionsUpdateManyWithoutDictSubmSentTypeNestedInputObjectSchema } from './tblSubmissionsUpdateManyWithoutDictSubmSentTypeNestedInput.schema'

const makeSchema = () => z.object({
  SubmSentType: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsUpdateManyWithoutDictSubmSentTypeNestedInputObjectSchema).optional()
}).strict();
export const dictSubmSentTypeUpdateInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeUpdateInput>;
export const dictSubmSentTypeUpdateInputObjectZodSchema = makeSchema();
