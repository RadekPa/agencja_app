import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  TempName: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  TempPath: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  TempSubject: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblMailingTemplatesUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingTemplatesUpdateManyMutationInput>;
export const tblMailingTemplatesUpdateManyMutationInputObjectZodSchema = makeSchema();
