import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubClassCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblMailingListsUncheckedUpdateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsUncheckedUpdateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUncheckedUpdateWithoutTblCustomersInput>;
export const tblMailingListsUncheckedUpdateWithoutTblCustomersInputObjectZodSchema = makeSchema();
