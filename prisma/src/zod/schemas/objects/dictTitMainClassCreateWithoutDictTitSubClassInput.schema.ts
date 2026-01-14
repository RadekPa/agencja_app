import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblMailingListsCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsCreateNestedManyWithoutDictTitMainClassInput.schema';
import { tblTitlesCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblTitlesCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblTitlesCreateNestedManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.string().max(10),
  ClassDesc: z.string().max(50).optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional()
}).strict();
export const dictTitMainClassCreateWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateWithoutDictTitSubClassInput>;
export const dictTitMainClassCreateWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
