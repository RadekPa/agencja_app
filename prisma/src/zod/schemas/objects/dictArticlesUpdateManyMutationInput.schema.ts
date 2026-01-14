import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Article: z.union([z.string().max(10), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictArticlesUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.dictArticlesUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUpdateManyMutationInput>;
export const dictArticlesUpdateManyMutationInputObjectZodSchema = makeSchema();
