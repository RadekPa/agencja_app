import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema as dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema } from './dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInput.schema';
import { tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema as tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema } from './tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInput.schema'

const makeSchema = () => z.object({
  dictTitMainClass: z.lazy(() => dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema).optional()
}).strict();
export const tblMailingListsUpdateWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateWithoutDictTitSubClassInput>;
export const tblMailingListsUpdateWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
