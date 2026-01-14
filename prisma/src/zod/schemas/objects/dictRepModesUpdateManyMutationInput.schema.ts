import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  RepModeDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictRepModesUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.dictRepModesUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesUpdateManyMutationInput>;
export const dictRepModesUpdateManyMutationInputObjectZodSchema = makeSchema();
