import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsUpdateWithoutDictTitSubClassInputObjectSchema as tblMailingListsUpdateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUpdateWithoutDictTitSubClassInput.schema';
import { tblMailingListsUncheckedUpdateWithoutDictTitSubClassInputObjectSchema as tblMailingListsUncheckedUpdateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUncheckedUpdateWithoutDictTitSubClassInput.schema';
import { tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema as tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsCreateWithoutDictTitSubClassInput.schema';
import { tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema as tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblMailingListsUpdateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedUpdateWithoutDictTitSubClassInputObjectSchema)]),
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema)])
}).strict();
export const tblMailingListsUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpsertWithWhereUniqueWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpsertWithWhereUniqueWithoutDictTitSubClassInput>;
export const tblMailingListsUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
