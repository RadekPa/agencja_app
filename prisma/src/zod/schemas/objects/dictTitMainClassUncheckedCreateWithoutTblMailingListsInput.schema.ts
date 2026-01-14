import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema as dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInput.schema';
import { tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.string(),
  ClassDesc: z.string().optional().nullable(),
  dictTitSubClass: z.lazy(() => dictTitSubClassUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUncheckedCreateWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUncheckedCreateWithoutTblMailingListsInput>;
export const dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectZodSchema = makeSchema();
