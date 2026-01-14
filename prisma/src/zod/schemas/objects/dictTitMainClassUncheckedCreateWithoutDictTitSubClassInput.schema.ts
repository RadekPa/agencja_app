import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInput.schema';
import { tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema as tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.string(),
  ClassDesc: z.string().optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUncheckedCreateWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUncheckedCreateWithoutDictTitSubClassInput>;
export const dictTitMainClassUncheckedCreateWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
