import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ArType: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ArTypeDescription: z.union([z.string().max(40), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ArTypeDescriptionPL: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const ArTypeUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ArTypeUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeUpdateManyMutationInput>;
export const ArTypeUpdateManyMutationInputObjectZodSchema = makeSchema();
