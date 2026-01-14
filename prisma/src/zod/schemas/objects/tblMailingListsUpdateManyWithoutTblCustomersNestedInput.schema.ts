import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateWithoutTblCustomersInputObjectSchema as tblMailingListsCreateWithoutTblCustomersInputObjectSchema } from './tblMailingListsCreateWithoutTblCustomersInput.schema';
import { tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutTblCustomersInput.schema';
import { tblMailingListsCreateOrConnectWithoutTblCustomersInputObjectSchema as tblMailingListsCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblMailingListsCreateOrConnectWithoutTblCustomersInput.schema';
import { tblMailingListsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblMailingListsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblMailingListsUpsertWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblMailingListsCreateManyTblCustomersInputEnvelopeObjectSchema as tblMailingListsCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblMailingListsCreateManyTblCustomersInputEnvelope.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblMailingListsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblMailingListsUpdateWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblMailingListsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema as tblMailingListsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema } from './tblMailingListsUpdateManyWithWhereWithoutTblCustomersInput.schema';
import { tblMailingListsScalarWhereInputObjectSchema as tblMailingListsScalarWhereInputObjectSchema } from './tblMailingListsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblMailingListsCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblMailingListsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblMailingListsCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblMailingListsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblMailingListsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => tblMailingListsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblMailingListsScalarWhereInputObjectSchema), z.lazy(() => tblMailingListsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblMailingListsUpdateManyWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.tblMailingListsUpdateManyWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUpdateManyWithoutTblCustomersNestedInput>;
export const tblMailingListsUpdateManyWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
