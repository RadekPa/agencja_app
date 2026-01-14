import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CurrID: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CurrDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictCurrenciesUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.dictCurrenciesUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesUpdateManyMutationInput>;
export const dictCurrenciesUpdateManyMutationInputObjectZodSchema = makeSchema();
