import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateWithoutTblCustomersInputObjectSchema as tblMailingListsCreateWithoutTblCustomersInputObjectSchema } from './tblMailingListsCreateWithoutTblCustomersInput.schema';
import { tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutTblCustomersInput.schema';
import { tblMailingListsCreateOrConnectWithoutTblCustomersInputObjectSchema as tblMailingListsCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblMailingListsCreateOrConnectWithoutTblCustomersInput.schema';
import { tblMailingListsCreateManyTblCustomersInputEnvelopeObjectSchema as tblMailingListsCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblMailingListsCreateManyTblCustomersInputEnvelope.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblMailingListsCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblMailingListsCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblMailingListsCreateNestedManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateNestedManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateNestedManyWithoutTblCustomersInput>;
export const tblMailingListsCreateNestedManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
