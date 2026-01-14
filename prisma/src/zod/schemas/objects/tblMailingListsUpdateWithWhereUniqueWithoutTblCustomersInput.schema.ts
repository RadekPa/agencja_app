import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsUpdateWithoutTblCustomersInputObjectSchema as tblMailingListsUpdateWithoutTblCustomersInputObjectSchema } from './tblMailingListsUpdateWithoutTblCustomersInput.schema';
import { tblMailingListsUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblMailingListsUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblMailingListsUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblMailingListsUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblMailingListsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateWithWhereUniqueWithoutTblCustomersInput>;
export const tblMailingListsUpdateWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
