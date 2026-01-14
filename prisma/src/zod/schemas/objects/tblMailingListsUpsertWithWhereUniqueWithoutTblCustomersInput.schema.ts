import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsUpdateWithoutTblCustomersInputObjectSchema as tblMailingListsUpdateWithoutTblCustomersInputObjectSchema } from './tblMailingListsUpdateWithoutTblCustomersInput.schema';
import { tblMailingListsUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblMailingListsUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblMailingListsUncheckedUpdateWithoutTblCustomersInput.schema';
import { tblMailingListsCreateWithoutTblCustomersInputObjectSchema as tblMailingListsCreateWithoutTblCustomersInputObjectSchema } from './tblMailingListsCreateWithoutTblCustomersInput.schema';
import { tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblMailingListsUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblMailingListsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpsertWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpsertWithWhereUniqueWithoutTblCustomersInput>;
export const tblMailingListsUpsertWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
