import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectSchema as dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassCreateNestedOneWithoutTblMailingListsInput.schema';
import { tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectSchema as tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  dictTitMainClass: z.lazy(() => dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectSchema),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectSchema)
}).strict();
export const tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateWithoutDictTitSubClassInput>;
export const tblMailingListsCreateWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
