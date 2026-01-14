import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutTblMailingListsInputObjectSchema as tblCustomersCreateWithoutTblMailingListsInputObjectSchema } from './tblCustomersCreateWithoutTblMailingListsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblMailingListsInput>;
export const tblCustomersCreateOrConnectWithoutTblMailingListsInputObjectZodSchema = makeSchema();
