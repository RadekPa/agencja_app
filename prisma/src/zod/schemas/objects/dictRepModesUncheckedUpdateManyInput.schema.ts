import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  RepModeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  RepModeDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictRepModesUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictRepModesUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesUncheckedUpdateManyInput>;
export const dictRepModesUncheckedUpdateManyInputObjectZodSchema = makeSchema();
