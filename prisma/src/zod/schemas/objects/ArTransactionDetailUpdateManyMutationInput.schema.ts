import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  AccountID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Amount: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const ArTransactionDetailUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailUpdateManyMutationInput>;
export const ArTransactionDetailUpdateManyMutationInputObjectZodSchema = makeSchema();
