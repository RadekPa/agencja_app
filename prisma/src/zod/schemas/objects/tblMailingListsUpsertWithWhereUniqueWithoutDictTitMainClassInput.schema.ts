import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsUpdateWithoutDictTitMainClassInputObjectSchema as tblMailingListsUpdateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUpdateWithoutDictTitMainClassInput.schema';
import { tblMailingListsUncheckedUpdateWithoutDictTitMainClassInputObjectSchema as tblMailingListsUncheckedUpdateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUncheckedUpdateWithoutDictTitMainClassInput.schema';
import { tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema as tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsCreateWithoutDictTitMainClassInput.schema';
import { tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema as tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblMailingListsUpdateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedUpdateWithoutDictTitMainClassInputObjectSchema)]),
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const tblMailingListsUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpsertWithWhereUniqueWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpsertWithWhereUniqueWithoutDictTitMainClassInput>;
export const tblMailingListsUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
