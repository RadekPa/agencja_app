import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.union([z.string().max(10), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubClassCode: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblMailingListsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsUncheckedUpdateManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUncheckedUpdateManyWithoutTblCustomersInput>;
export const tblMailingListsUncheckedUpdateManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
