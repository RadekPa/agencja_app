import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblSubmissionsUncheckedUpdateManyWithoutDictSubmSentTypeNestedInputObjectSchema as tblSubmissionsUncheckedUpdateManyWithoutDictSubmSentTypeNestedInputObjectSchema } from './tblSubmissionsUncheckedUpdateManyWithoutDictSubmSentTypeNestedInput.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubmSentType: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsUncheckedUpdateManyWithoutDictSubmSentTypeNestedInputObjectSchema).optional()
}).strict();
export const dictSubmSentTypeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeUncheckedUpdateInput>;
export const dictSubmSentTypeUncheckedUpdateInputObjectZodSchema = makeSchema();
