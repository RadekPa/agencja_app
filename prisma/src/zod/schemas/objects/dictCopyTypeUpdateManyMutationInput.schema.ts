import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CopyType: z.union([z.string().max(30), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictCopyTypeUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUpdateManyMutationInput>;
export const dictCopyTypeUpdateManyMutationInputObjectZodSchema = makeSchema();
