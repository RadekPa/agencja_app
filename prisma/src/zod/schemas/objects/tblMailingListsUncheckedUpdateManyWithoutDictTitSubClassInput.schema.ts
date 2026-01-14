import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.union([z.string().max(10), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassInput>;
export const tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
