import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CurrDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  CurrID: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  XRate: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictXRatesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictXRatesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesUncheckedUpdateInput>;
export const dictXRatesUncheckedUpdateInputObjectZodSchema = makeSchema();
