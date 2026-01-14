import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  ExcludeReasonCode: z.union([z.string().max(3), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ExcludeReasonDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictMissRoyExcludeReasonUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonUncheckedUpdateInput>;
export const dictMissRoyExcludeReasonUncheckedUpdateInputObjectZodSchema = makeSchema();
