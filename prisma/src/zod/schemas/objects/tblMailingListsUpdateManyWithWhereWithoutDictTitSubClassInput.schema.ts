import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsScalarWhereInputObjectSchema as tblMailingListsScalarWhereInputObjectSchema } from './tblMailingListsScalarWhereInput.schema';
import { tblMailingListsUpdateManyMutationInputObjectSchema as tblMailingListsUpdateManyMutationInputObjectSchema } from './tblMailingListsUpdateManyMutationInput.schema';
import { tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassInputObjectSchema as tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblMailingListsUpdateManyMutationInputObjectSchema), z.lazy(() => tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassInputObjectSchema)])
}).strict();
export const tblMailingListsUpdateManyWithWhereWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateManyWithWhereWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateManyWithWhereWithoutDictTitSubClassInput>;
export const tblMailingListsUpdateManyWithWhereWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
