import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  PubISBN1: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  PubISBN2: z.union([z.string().max(7), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblPubISBNUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblPubISBNUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNUpdateManyMutationInput>;
export const tblPubISBNUpdateManyMutationInputObjectZodSchema = makeSchema();
