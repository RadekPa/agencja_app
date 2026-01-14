import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.string(),
  ClassCode: z.string().optional().nullable(),
  SubClassDesc: z.string().optional().nullable(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUncheckedCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUncheckedCreateWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUncheckedCreateWithoutTblMailingListsInput>;
export const dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectZodSchema = makeSchema();
