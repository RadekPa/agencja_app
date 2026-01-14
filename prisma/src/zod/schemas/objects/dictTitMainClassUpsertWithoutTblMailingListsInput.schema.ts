import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassUpdateWithoutTblMailingListsInputObjectSchema as dictTitMainClassUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUpdateWithoutTblMailingListsInput.schema';
import { dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema as dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUncheckedUpdateWithoutTblMailingListsInput.schema';
import { dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema as dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassCreateWithoutTblMailingListsInput.schema';
import { dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema as dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutTblMailingListsInput.schema';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictTitMainClassUpdateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema)]),
  where: z.lazy(() => dictTitMainClassWhereInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUpsertWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpsertWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpsertWithoutTblMailingListsInput>;
export const dictTitMainClassUpsertWithoutTblMailingListsInputObjectZodSchema = makeSchema();
