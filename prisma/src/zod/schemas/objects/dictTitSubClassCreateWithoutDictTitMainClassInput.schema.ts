import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsCreateNestedManyWithoutDictTitSubClassInput.schema';
import { tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassCreateNestedManyWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.string().max(5),
  SubClassDesc: z.string().max(50).optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional()
}).strict();
export const dictTitSubClassCreateWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateWithoutDictTitMainClassInput>;
export const dictTitSubClassCreateWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
