import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectSchema as dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassCreateNestedOneWithoutTblMailingListsInput.schema';
import { dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectSchema as dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassCreateNestedOneWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  dictTitMainClass: z.lazy(() => dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectSchema),
  dictTitSubClass: z.lazy(() => dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectSchema)
}).strict();
export const tblMailingListsCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateWithoutTblCustomersInput>;
export const tblMailingListsCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
