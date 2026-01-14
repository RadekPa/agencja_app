import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { ArTransactionUpdateOneWithoutArTransactionDetailNestedInputObjectSchema as ArTransactionUpdateOneWithoutArTransactionDetailNestedInputObjectSchema } from './ArTransactionUpdateOneWithoutArTransactionDetailNestedInput.schema'

const makeSchema = () => z.object({
  AccountID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Amount: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ArTransaction: z.lazy(() => ArTransactionUpdateOneWithoutArTransactionDetailNestedInputObjectSchema).optional()
}).strict();
export const ArTransactionDetailUpdateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailUpdateInput>;
export const ArTransactionDetailUpdateInputObjectZodSchema = makeSchema();
