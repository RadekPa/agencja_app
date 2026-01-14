import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsScalarWhereInputObjectSchema as tblMailingListsScalarWhereInputObjectSchema } from './tblMailingListsScalarWhereInput.schema';
import { tblMailingListsUpdateManyMutationInputObjectSchema as tblMailingListsUpdateManyMutationInputObjectSchema } from './tblMailingListsUpdateManyMutationInput.schema';
import { tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassInputObjectSchema as tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblMailingListsUpdateManyMutationInputObjectSchema), z.lazy(() => tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const tblMailingListsUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateManyWithWhereWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateManyWithWhereWithoutDictTitMainClassInput>;
export const tblMailingListsUpdateManyWithWhereWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
