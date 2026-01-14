import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.string(),
  ClassCode: z.string().optional().nullable(),
  SubClassDesc: z.string().optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUncheckedCreateWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUncheckedCreateWithoutTblTitSubClassInput>;
export const dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
