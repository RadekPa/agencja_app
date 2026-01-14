import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  TransactionType: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  DefaultDebitAccount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  DefaultCreditAccount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ArDefaultAccountUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountUncheckedUpdateInput>;
export const ArDefaultAccountUncheckedUpdateInputObjectZodSchema = makeSchema();
