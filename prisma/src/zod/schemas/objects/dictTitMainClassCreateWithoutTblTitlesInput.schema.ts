import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectSchema as dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './dictTitSubClassCreateNestedManyWithoutDictTitMainClassInput.schema';
import { tblMailingListsCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblMailingListsCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsCreateNestedManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.string().max(10),
  ClassDesc: z.string().max(50).optional().nullable(),
  dictTitSubClass: z.lazy(() => dictTitSubClassCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional()
}).strict();
export const dictTitMainClassCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateWithoutTblTitlesInput>;
export const dictTitMainClassCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
