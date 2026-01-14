import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInput.schema';
import { tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.string().max(5),
  ClassCode: z.string().max(10).optional().nullable(),
  SubClassDesc: z.string().max(50).optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUncheckedCreateInput>;
export const dictTitSubClassUncheckedCreateInputObjectZodSchema = makeSchema();
