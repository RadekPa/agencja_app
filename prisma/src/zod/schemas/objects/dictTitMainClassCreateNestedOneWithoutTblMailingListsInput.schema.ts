import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema as dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassCreateWithoutTblMailingListsInput.schema';
import { dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema as dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutTblMailingListsInput.schema';
import { dictTitMainClassCreateOrConnectWithoutTblMailingListsInputObjectSchema as dictTitMainClassCreateOrConnectWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassCreateOrConnectWithoutTblMailingListsInput.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './dictTitMainClassWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictTitMainClassCreateOrConnectWithoutTblMailingListsInputObjectSchema).optional(),
  connect: z.lazy(() => dictTitMainClassWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateNestedOneWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateNestedOneWithoutTblMailingListsInput>;
export const dictTitMainClassCreateNestedOneWithoutTblMailingListsInputObjectZodSchema = makeSchema();
