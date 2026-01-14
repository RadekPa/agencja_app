import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CurrID: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Name: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictXRateExcelNamesUpdateInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesUpdateInput>;
export const dictXRateExcelNamesUpdateInputObjectZodSchema = makeSchema();
