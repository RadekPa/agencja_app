import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsUpdateWithoutDictTitSubClassInputObjectSchema as tblMailingListsUpdateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUpdateWithoutDictTitSubClassInput.schema';
import { tblMailingListsUncheckedUpdateWithoutDictTitSubClassInputObjectSchema as tblMailingListsUncheckedUpdateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUncheckedUpdateWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblMailingListsUpdateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedUpdateWithoutDictTitSubClassInputObjectSchema)])
}).strict();
export const tblMailingListsUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateWithWhereUniqueWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateWithWhereUniqueWithoutDictTitSubClassInput>;
export const tblMailingListsUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
