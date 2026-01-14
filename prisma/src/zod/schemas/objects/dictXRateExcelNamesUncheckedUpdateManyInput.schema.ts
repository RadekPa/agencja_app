import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CurrID: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Name: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictXRateExcelNamesUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRateExcelNamesUncheckedUpdateManyInput>;
export const dictXRateExcelNamesUncheckedUpdateManyInputObjectZodSchema = makeSchema();
