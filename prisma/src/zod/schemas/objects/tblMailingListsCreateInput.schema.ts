import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectSchema as dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassCreateNestedOneWithoutTblMailingListsInput.schema';
import { dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectSchema as dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassCreateNestedOneWithoutTblMailingListsInput.schema';
import { tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectSchema as tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  dictTitMainClass: z.lazy(() => dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectSchema),
  dictTitSubClass: z.lazy(() => dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectSchema),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectSchema)
}).strict();
export const tblMailingListsCreateInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateInput>;
export const tblMailingListsCreateInputObjectZodSchema = makeSchema();
