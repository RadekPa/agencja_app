import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsScalarWhereInputObjectSchema as tblMailingListsScalarWhereInputObjectSchema } from './tblMailingListsScalarWhereInput.schema';
import { tblMailingListsUpdateManyMutationInputObjectSchema as tblMailingListsUpdateManyMutationInputObjectSchema } from './tblMailingListsUpdateManyMutationInput.schema';
import { tblMailingListsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema as tblMailingListsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema } from './tblMailingListsUncheckedUpdateManyWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblMailingListsUpdateManyMutationInputObjectSchema), z.lazy(() => tblMailingListsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblMailingListsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateManyWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateManyWithWhereWithoutTblCustomersInput>;
export const tblMailingListsUpdateManyWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
