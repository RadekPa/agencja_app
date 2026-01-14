import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessCreateWithoutTblUsersInputObjectSchema as tblUserAccessCreateWithoutTblUsersInputObjectSchema } from './tblUserAccessCreateWithoutTblUsersInput.schema';
import { tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema as tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblUserAccessUncheckedCreateWithoutTblUsersInput.schema';
import { tblUserAccessCreateOrConnectWithoutTblUsersInputObjectSchema as tblUserAccessCreateOrConnectWithoutTblUsersInputObjectSchema } from './tblUserAccessCreateOrConnectWithoutTblUsersInput.schema';
import { tblUserAccessUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema as tblUserAccessUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema } from './tblUserAccessUpsertWithWhereUniqueWithoutTblUsersInput.schema';
import { tblUserAccessCreateManyTblUsersInputEnvelopeObjectSchema as tblUserAccessCreateManyTblUsersInputEnvelopeObjectSchema } from './tblUserAccessCreateManyTblUsersInputEnvelope.schema';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './tblUserAccessWhereUniqueInput.schema';
import { tblUserAccessUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema as tblUserAccessUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema } from './tblUserAccessUpdateWithWhereUniqueWithoutTblUsersInput.schema';
import { tblUserAccessUpdateManyWithWhereWithoutTblUsersInputObjectSchema as tblUserAccessUpdateManyWithWhereWithoutTblUsersInputObjectSchema } from './tblUserAccessUpdateManyWithWhereWithoutTblUsersInput.schema';
import { tblUserAccessScalarWhereInputObjectSchema as tblUserAccessScalarWhereInputObjectSchema } from './tblUserAccessScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUserAccessCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessCreateWithoutTblUsersInputObjectSchema).array(), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblUserAccessCreateOrConnectWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessCreateOrConnectWithoutTblUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblUserAccessUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblUserAccessCreateManyTblUsersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema), z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema), z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema), z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema), z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblUserAccessUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblUserAccessUpdateManyWithWhereWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessUpdateManyWithWhereWithoutTblUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblUserAccessScalarWhereInputObjectSchema), z.lazy(() => tblUserAccessScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblUserAccessUncheckedUpdateManyWithoutTblUsersNestedInputObjectSchema: z.ZodType<Prisma.tblUserAccessUncheckedUpdateManyWithoutTblUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUncheckedUpdateManyWithoutTblUsersNestedInput>;
export const tblUserAccessUncheckedUpdateManyWithoutTblUsersNestedInputObjectZodSchema = makeSchema();
