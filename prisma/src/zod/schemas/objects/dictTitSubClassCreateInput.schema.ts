import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectSchema as dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassCreateNestedOneWithoutDictTitSubClassInput.schema';
import { tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsCreateNestedManyWithoutDictTitSubClassInput.schema';
import { tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassCreateNestedManyWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.string().max(5),
  SubClassDesc: z.string().max(50).optional().nullable(),
  dictTitMainClass: z.lazy(() => dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional()
}).strict();
export const dictTitSubClassCreateInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateInput>;
export const dictTitSubClassCreateInputObjectZodSchema = makeSchema();
