import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsCreateWithoutTblCustomersInputObjectSchema as tblMailingListsCreateWithoutTblCustomersInputObjectSchema } from './tblMailingListsCreateWithoutTblCustomersInput.schema';
import { tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblMailingListsCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateOrConnectWithoutTblCustomersInput>;
export const tblMailingListsCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
