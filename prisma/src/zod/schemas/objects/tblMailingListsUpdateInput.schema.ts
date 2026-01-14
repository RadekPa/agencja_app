import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema as dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema } from './dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInput.schema';
import { dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema as dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema } from './dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInput.schema';
import { tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema as tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema } from './tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInput.schema'

const makeSchema = () => z.object({
  dictTitMainClass: z.lazy(() => dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema).optional(),
  dictTitSubClass: z.lazy(() => dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema).optional()
}).strict();
export const tblMailingListsUpdateInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateInput>;
export const tblMailingListsUpdateInputObjectZodSchema = makeSchema();
