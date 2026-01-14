import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ItemID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  AccountID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Amount: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const ArTransactionDetailUncheckedUpdateWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailUncheckedUpdateWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailUncheckedUpdateWithoutArTransactionInput>;
export const ArTransactionDetailUncheckedUpdateWithoutArTransactionInputObjectZodSchema = makeSchema();
