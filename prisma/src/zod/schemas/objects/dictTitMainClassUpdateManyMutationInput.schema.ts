import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.union([z.string().max(10), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ClassDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictTitMainClassUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateManyMutationInput>;
export const dictTitMainClassUpdateManyMutationInputObjectZodSchema = makeSchema();
