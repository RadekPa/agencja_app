import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema as dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema } from './dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInput.schema';
import { tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema as tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema } from './tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInput.schema'

const makeSchema = () => z.object({
  dictTitSubClass: z.lazy(() => dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema).optional()
}).strict();
export const tblMailingListsUpdateWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateWithoutDictTitMainClassInput>;
export const tblMailingListsUpdateWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
