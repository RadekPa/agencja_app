import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectSchema as dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassCreateNestedOneWithoutTblMailingListsInput.schema';
import { tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectSchema as tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  dictTitSubClass: z.lazy(() => dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectSchema),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectSchema)
}).strict();
export const tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateWithoutDictTitMainClassInput>;
export const tblMailingListsCreateWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
