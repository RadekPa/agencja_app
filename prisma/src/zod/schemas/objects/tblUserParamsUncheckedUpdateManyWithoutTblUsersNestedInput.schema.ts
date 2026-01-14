import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserParamsCreateWithoutTblUsersInputObjectSchema as tblUserParamsCreateWithoutTblUsersInputObjectSchema } from './tblUserParamsCreateWithoutTblUsersInput.schema';
import { tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema as tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblUserParamsUncheckedCreateWithoutTblUsersInput.schema';
import { tblUserParamsCreateOrConnectWithoutTblUsersInputObjectSchema as tblUserParamsCreateOrConnectWithoutTblUsersInputObjectSchema } from './tblUserParamsCreateOrConnectWithoutTblUsersInput.schema';
import { tblUserParamsUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema as tblUserParamsUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema } from './tblUserParamsUpsertWithWhereUniqueWithoutTblUsersInput.schema';
import { tblUserParamsCreateManyTblUsersInputEnvelopeObjectSchema as tblUserParamsCreateManyTblUsersInputEnvelopeObjectSchema } from './tblUserParamsCreateManyTblUsersInputEnvelope.schema';
import { tblUserParamsWhereUniqueInputObjectSchema as tblUserParamsWhereUniqueInputObjectSchema } from './tblUserParamsWhereUniqueInput.schema';
import { tblUserParamsUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema as tblUserParamsUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema } from './tblUserParamsUpdateWithWhereUniqueWithoutTblUsersInput.schema';
import { tblUserParamsUpdateManyWithWhereWithoutTblUsersInputObjectSchema as tblUserParamsUpdateManyWithWhereWithoutTblUsersInputObjectSchema } from './tblUserParamsUpdateManyWithWhereWithoutTblUsersInput.schema';
import { tblUserParamsScalarWhereInputObjectSchema as tblUserParamsScalarWhereInputObjectSchema } from './tblUserParamsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUserParamsCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsCreateWithoutTblUsersInputObjectSchema).array(), z.lazy(() => tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblUserParamsCreateOrConnectWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsCreateOrConnectWithoutTblUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblUserParamsUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblUserParamsCreateManyTblUsersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema), z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema), z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema), z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema), z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblUserParamsUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblUserParamsUpdateManyWithWhereWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsUpdateManyWithWhereWithoutTblUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblUserParamsScalarWhereInputObjectSchema), z.lazy(() => tblUserParamsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblUserParamsUncheckedUpdateManyWithoutTblUsersNestedInputObjectSchema: z.ZodType<Prisma.tblUserParamsUncheckedUpdateManyWithoutTblUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUncheckedUpdateManyWithoutTblUsersNestedInput>;
export const tblUserParamsUncheckedUpdateManyWithoutTblUsersNestedInputObjectZodSchema = makeSchema();
