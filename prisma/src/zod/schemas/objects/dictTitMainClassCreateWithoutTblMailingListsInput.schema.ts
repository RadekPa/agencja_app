import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectSchema as dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassCreateNestedManyWithoutDictTitMainClassInput.schema';
import { tblTitlesCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblTitlesCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblTitlesCreateNestedManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.string().max(10),
  ClassDesc: z.string().max(50).optional().nullable(),
  dictTitSubClass: z.lazy(() => dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional()
}).strict();
export const dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateWithoutTblMailingListsInput>;
export const dictTitMainClassCreateWithoutTblMailingListsInputObjectZodSchema = makeSchema();
