import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema as dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema } from './dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInput.schema';
import { dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema as dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema } from './dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInput.schema'

const makeSchema = () => z.object({
  dictTitMainClass: z.lazy(() => dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema).optional(),
  dictTitSubClass: z.lazy(() => dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema).optional()
}).strict();
export const tblMailingListsUpdateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateWithoutTblCustomersInput>;
export const tblMailingListsUpdateWithoutTblCustomersInputObjectZodSchema = makeSchema();
