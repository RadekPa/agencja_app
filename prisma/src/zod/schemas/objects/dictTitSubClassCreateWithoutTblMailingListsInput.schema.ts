import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectSchema as dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectSchema } from './dictTitMainClassCreateNestedOneWithoutDictTitSubClassInput.schema';
import { tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectSchema as tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassCreateNestedManyWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.string().max(5),
  SubClassDesc: z.string().max(50).optional().nullable(),
  dictTitMainClass: z.lazy(() => dictTitMainClassCreateNestedOneWithoutDictTitSubClassInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectSchema).optional()
}).strict();
export const dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateWithoutTblMailingListsInput>;
export const dictTitSubClassCreateWithoutTblMailingListsInputObjectZodSchema = makeSchema();
