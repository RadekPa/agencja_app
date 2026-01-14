import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema';
import { dictTitMainClassUpdateWithoutTblMailingListsInputObjectSchema as dictTitMainClassUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUpdateWithoutTblMailingListsInput.schema';
import { dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema as dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUncheckedUpdateWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitMainClassWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictTitMainClassUpdateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema)])
}).strict();
export const dictTitMainClassUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpdateToOneWithWhereWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateToOneWithWhereWithoutTblMailingListsInput>;
export const dictTitMainClassUpdateToOneWithWhereWithoutTblMailingListsInputObjectZodSchema = makeSchema();
