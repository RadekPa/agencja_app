import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsUpdateWithoutDictTitMainClassInputObjectSchema as tblMailingListsUpdateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUpdateWithoutDictTitMainClassInput.schema';
import { tblMailingListsUncheckedUpdateWithoutDictTitMainClassInputObjectSchema as tblMailingListsUncheckedUpdateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUncheckedUpdateWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblMailingListsUpdateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedUpdateWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const tblMailingListsUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateWithWhereUniqueWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateWithWhereUniqueWithoutDictTitMainClassInput>;
export const tblMailingListsUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
