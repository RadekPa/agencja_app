import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ArType: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  ArTypeDescription: z.union([z.string().max(40), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ArTypeDescriptionPL: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const ArTransactionTypeUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeUpdateManyMutationInput>;
export const ArTransactionTypeUpdateManyMutationInputObjectZodSchema = makeSchema();
