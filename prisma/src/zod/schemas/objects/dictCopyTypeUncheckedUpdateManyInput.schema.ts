import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CopyTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CopyType: z.union([z.string().max(30), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictCopyTypeUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUncheckedUpdateManyInput>;
export const dictCopyTypeUncheckedUpdateManyInputObjectZodSchema = makeSchema();
