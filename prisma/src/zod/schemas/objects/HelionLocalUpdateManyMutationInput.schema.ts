import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ISBNORG: z.union([z.string().max(13), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ISBNHELION: z.union([z.string().max(13), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  TYTULORG: z.union([z.string().max(120), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  TYTULHELION: z.union([z.string().max(120), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const HelionLocalUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.HelionLocalUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.HelionLocalUpdateManyMutationInput>;
export const HelionLocalUpdateManyMutationInputObjectZodSchema = makeSchema();
