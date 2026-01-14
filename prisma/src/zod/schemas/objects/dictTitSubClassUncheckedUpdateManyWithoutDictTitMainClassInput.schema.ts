import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubClassDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassInput>;
export const dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
