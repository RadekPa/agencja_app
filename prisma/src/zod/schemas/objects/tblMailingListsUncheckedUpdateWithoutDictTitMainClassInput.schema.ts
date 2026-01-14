import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblMailingListsUncheckedUpdateWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUncheckedUpdateWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUncheckedUpdateWithoutDictTitMainClassInput>;
export const tblMailingListsUncheckedUpdateWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
