import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectSchema as dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassCreateNestedOneWithoutDictTitSubClassInput.schema';
import { tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsCreateNestedManyWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.string().max(5),
  SubClassDesc: z.string().max(50).optional().nullable(),
  dictTitMainClass: z.lazy(() => dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional()
}).strict();
export const dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateWithoutTblTitSubClassInput>;
export const dictTitSubClassCreateWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
