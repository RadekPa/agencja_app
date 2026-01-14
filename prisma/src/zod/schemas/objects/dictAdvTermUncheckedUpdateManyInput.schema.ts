import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  AdvTermId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  AdvTermDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AdvTermPL: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictAdvTermUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictAdvTermUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermUncheckedUpdateManyInput>;
export const dictAdvTermUncheckedUpdateManyInputObjectZodSchema = makeSchema();
