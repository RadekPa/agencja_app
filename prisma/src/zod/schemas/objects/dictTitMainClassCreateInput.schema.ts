import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectSchema as dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassCreateNestedManyWithoutDictTitMainClassInput.schema';
import { tblMailingListsCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblMailingListsCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsCreateNestedManyWithoutDictTitMainClassInput.schema';
import { tblTitlesCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblTitlesCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblTitlesCreateNestedManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.string().max(10),
  ClassDesc: z.string().max(50).optional().nullable(),
  dictTitSubClass: z.lazy(() => dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional()
}).strict();
export const dictTitMainClassCreateInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateInput>;
export const dictTitMainClassCreateInputObjectZodSchema = makeSchema();
