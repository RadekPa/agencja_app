import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  PubISBN1: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  PubISBN2: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblPubISBNUncheckedUpdateWithoutTblPublishersInputObjectSchema: z.ZodType<Prisma.tblPubISBNUncheckedUpdateWithoutTblPublishersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNUncheckedUpdateWithoutTblPublishersInput>;
export const tblPubISBNUncheckedUpdateWithoutTblPublishersInputObjectZodSchema = makeSchema();
