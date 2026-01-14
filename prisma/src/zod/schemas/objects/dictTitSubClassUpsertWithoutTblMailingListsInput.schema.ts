import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassUpdateWithoutTblMailingListsInputObjectSchema as dictTitSubClassUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUpdateWithoutTblMailingListsInput.schema';
import { dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema as dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUncheckedUpdateWithoutTblMailingListsInput.schema';
import { dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema as dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassCreateWithoutTblMailingListsInput.schema';
import { dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema as dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutTblMailingListsInput.schema';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './dictTitSubClassWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictTitSubClassUpdateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema)]),
  where: z.lazy(() => dictTitSubClassWhereInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUpsertWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpsertWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpsertWithoutTblMailingListsInput>;
export const dictTitSubClassUpsertWithoutTblMailingListsInputObjectZodSchema = makeSchema();
