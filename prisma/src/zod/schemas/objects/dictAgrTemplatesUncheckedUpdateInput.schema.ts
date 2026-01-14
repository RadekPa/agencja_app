import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Name: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  FileName: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictAgrTemplatesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictAgrTemplatesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrTemplatesUncheckedUpdateInput>;
export const dictAgrTemplatesUncheckedUpdateInputObjectZodSchema = makeSchema();
