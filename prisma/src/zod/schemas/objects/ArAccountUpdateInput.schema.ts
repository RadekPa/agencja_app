import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  AccountID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  AccountDescription: z.union([z.string().max(40), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ArAccountUpdateInputObjectSchema: z.ZodType<Prisma.ArAccountUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountUpdateInput>;
export const ArAccountUpdateInputObjectZodSchema = makeSchema();
