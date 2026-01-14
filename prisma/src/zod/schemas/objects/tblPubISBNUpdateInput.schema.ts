import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblPublishersUpdateOneRequiredWithoutTblPubISBNNestedInputObjectSchema as tblPublishersUpdateOneRequiredWithoutTblPubISBNNestedInputObjectSchema } from './tblPublishersUpdateOneRequiredWithoutTblPubISBNNestedInput.schema'

const makeSchema = () => z.object({
  PubISBN1: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  PubISBN2: z.union([z.string().max(7), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblPublishers: z.lazy(() => tblPublishersUpdateOneRequiredWithoutTblPubISBNNestedInputObjectSchema).optional()
}).strict();
export const tblPubISBNUpdateInputObjectSchema: z.ZodType<Prisma.tblPubISBNUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNUpdateInput>;
export const tblPubISBNUpdateInputObjectZodSchema = makeSchema();
