import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Name: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  FileName: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictAgrTemplatesUpdateInputObjectSchema: z.ZodType<Prisma.dictAgrTemplatesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrTemplatesUpdateInput>;
export const dictAgrTemplatesUpdateInputObjectZodSchema = makeSchema();
