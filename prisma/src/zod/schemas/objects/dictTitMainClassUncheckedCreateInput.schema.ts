import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInput.schema';
import { tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInput.schema';
import { tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.string().max(10),
  ClassDesc: z.string().max(50).optional().nullable(),
  dictTitSubClass: z.lazy(() => dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUncheckedCreateInput>;
export const dictTitMainClassUncheckedCreateInputObjectZodSchema = makeSchema();
