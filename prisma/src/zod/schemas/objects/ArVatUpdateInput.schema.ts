import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  VatCode: z.union([z.string().max(2), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Description: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  VatRate: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  DescriptionPL: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ArVatUpdateInputObjectSchema: z.ZodType<Prisma.ArVatUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArVatUpdateInput>;
export const ArVatUpdateInputObjectZodSchema = makeSchema();
