import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  TempID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  TempName: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  TempPath: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  TempSubject: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblMailingTemplatesUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingTemplatesUncheckedUpdateManyInput>;
export const tblMailingTemplatesUncheckedUpdateManyInputObjectZodSchema = makeSchema();
