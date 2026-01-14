import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersCreateWithoutTblUsersInputObjectSchema as tblCustUsersCreateWithoutTblUsersInputObjectSchema } from './tblCustUsersCreateWithoutTblUsersInput.schema';
import { tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema as tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblCustUsersUncheckedCreateWithoutTblUsersInput.schema';
import { tblCustUsersCreateOrConnectWithoutTblUsersInputObjectSchema as tblCustUsersCreateOrConnectWithoutTblUsersInputObjectSchema } from './tblCustUsersCreateOrConnectWithoutTblUsersInput.schema';
import { tblCustUsersUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema as tblCustUsersUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema } from './tblCustUsersUpsertWithWhereUniqueWithoutTblUsersInput.schema';
import { tblCustUsersCreateManyTblUsersInputEnvelopeObjectSchema as tblCustUsersCreateManyTblUsersInputEnvelopeObjectSchema } from './tblCustUsersCreateManyTblUsersInputEnvelope.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './tblCustUsersWhereUniqueInput.schema';
import { tblCustUsersUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema as tblCustUsersUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema } from './tblCustUsersUpdateWithWhereUniqueWithoutTblUsersInput.schema';
import { tblCustUsersUpdateManyWithWhereWithoutTblUsersInputObjectSchema as tblCustUsersUpdateManyWithWhereWithoutTblUsersInputObjectSchema } from './tblCustUsersUpdateManyWithWhereWithoutTblUsersInput.schema';
import { tblCustUsersScalarWhereInputObjectSchema as tblCustUsersScalarWhereInputObjectSchema } from './tblCustUsersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustUsersCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersCreateWithoutTblUsersInputObjectSchema).array(), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustUsersCreateOrConnectWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersCreateOrConnectWithoutTblUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblCustUsersUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustUsersCreateManyTblUsersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema), z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema), z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema), z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema), z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblCustUsersUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblCustUsersUpdateManyWithWhereWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersUpdateManyWithWhereWithoutTblUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblCustUsersScalarWhereInputObjectSchema), z.lazy(() => tblCustUsersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblCustUsersUpdateManyWithoutTblUsersNestedInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpdateManyWithoutTblUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpdateManyWithoutTblUsersNestedInput>;
export const tblCustUsersUpdateManyWithoutTblUsersNestedInputObjectZodSchema = makeSchema();
