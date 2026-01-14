import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ArTransactionUpdateOneRequiredWithoutArTransferDetailNestedInputObjectSchema as ArTransactionUpdateOneRequiredWithoutArTransferDetailNestedInputObjectSchema } from './ArTransactionUpdateOneRequiredWithoutArTransferDetailNestedInput.schema'

const makeSchema = () => z.object({
  DebitID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  AmtWired: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ArTransaction: z.lazy(() => ArTransactionUpdateOneRequiredWithoutArTransferDetailNestedInputObjectSchema).optional()
}).strict();
export const ArTransferDetailUpdateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailUpdateInput>;
export const ArTransferDetailUpdateInputObjectZodSchema = makeSchema();
