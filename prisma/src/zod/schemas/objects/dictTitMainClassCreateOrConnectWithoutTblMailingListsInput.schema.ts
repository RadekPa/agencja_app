import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './dictTitMainClassWhereUniqueInput.schema';
import { dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema as dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassCreateWithoutTblMailingListsInput.schema';
import { dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema as dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitMainClassWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema)])
}).strict();
export const dictTitMainClassCreateOrConnectWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateOrConnectWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateOrConnectWithoutTblMailingListsInput>;
export const dictTitMainClassCreateOrConnectWithoutTblMailingListsInputObjectZodSchema = makeSchema();
