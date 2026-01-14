import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInput.schema';
import { tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.string(),
  SubClassDesc: z.string().optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUncheckedCreateWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUncheckedCreateWithoutDictTitMainClassInput>;
export const dictTitSubClassUncheckedCreateWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
