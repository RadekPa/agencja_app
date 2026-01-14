import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersCreateWithoutTblCustomersInputObjectSchema as tblCustUsersCreateWithoutTblCustomersInputObjectSchema } from './tblCustUsersCreateWithoutTblCustomersInput.schema';
import { tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustUsersUncheckedCreateWithoutTblCustomersInput.schema';
import { tblCustUsersCreateOrConnectWithoutTblCustomersInputObjectSchema as tblCustUsersCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblCustUsersCreateOrConnectWithoutTblCustomersInput.schema';
import { tblCustUsersUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblCustUsersUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblCustUsersUpsertWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblCustUsersCreateManyTblCustomersInputEnvelopeObjectSchema as tblCustUsersCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblCustUsersCreateManyTblCustomersInputEnvelope.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './tblCustUsersWhereUniqueInput.schema';
import { tblCustUsersUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblCustUsersUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblCustUsersUpdateWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblCustUsersUpdateManyWithWhereWithoutTblCustomersInputObjectSchema as tblCustUsersUpdateManyWithWhereWithoutTblCustomersInputObjectSchema } from './tblCustUsersUpdateManyWithWhereWithoutTblCustomersInput.schema';
import { tblCustUsersScalarWhereInputObjectSchema as tblCustUsersScalarWhereInputObjectSchema } from './tblCustUsersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustUsersCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustUsersCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblCustUsersUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustUsersCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema), z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema), z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema), z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema), z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblCustUsersUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblCustUsersUpdateManyWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersUpdateManyWithWhereWithoutTblCustomersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblCustUsersScalarWhereInputObjectSchema), z.lazy(() => tblCustUsersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblCustUsersUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.tblCustUsersUncheckedUpdateManyWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUncheckedUpdateManyWithoutTblCustomersNestedInput>;
export const tblCustUsersUncheckedUpdateManyWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
