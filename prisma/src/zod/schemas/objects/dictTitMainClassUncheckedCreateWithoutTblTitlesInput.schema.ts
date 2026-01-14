import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInput.schema';
import { tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.string(),
  ClassDesc: z.string().optional().nullable(),
  dictTitSubClass: z.lazy(() => dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUncheckedCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUncheckedCreateWithoutTblTitlesInput>;
export const dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
