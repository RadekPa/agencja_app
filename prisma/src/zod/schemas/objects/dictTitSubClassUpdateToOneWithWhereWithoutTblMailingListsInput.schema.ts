import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './dictTitSubClassWhereInput.schema';
import { dictTitSubClassUpdateWithoutTblMailingListsInputObjectSchema as dictTitSubClassUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUpdateWithoutTblMailingListsInput.schema';
import { dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema as dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUncheckedUpdateWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitSubClassWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictTitSubClassUpdateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema)])
}).strict();
export const dictTitSubClassUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpdateToOneWithWhereWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateToOneWithWhereWithoutTblMailingListsInput>;
export const dictTitSubClassUpdateToOneWithWhereWithoutTblMailingListsInputObjectZodSchema = makeSchema();
