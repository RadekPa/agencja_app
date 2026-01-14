import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessCreateWithoutTblUsersInputObjectSchema as tblUserAccessCreateWithoutTblUsersInputObjectSchema } from './tblUserAccessCreateWithoutTblUsersInput.schema';
import { tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema as tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblUserAccessUncheckedCreateWithoutTblUsersInput.schema';
import { tblUserAccessCreateOrConnectWithoutTblUsersInputObjectSchema as tblUserAccessCreateOrConnectWithoutTblUsersInputObjectSchema } from './tblUserAccessCreateOrConnectWithoutTblUsersInput.schema';
import { tblUserAccessCreateManyTblUsersInputEnvelopeObjectSchema as tblUserAccessCreateManyTblUsersInputEnvelopeObjectSchema } from './tblUserAccessCreateManyTblUsersInputEnvelope.schema';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './tblUserAccessWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUserAccessCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessCreateWithoutTblUsersInputObjectSchema).array(), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblUserAccessCreateOrConnectWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessCreateOrConnectWithoutTblUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblUserAccessCreateManyTblUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema), z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblUserAccessCreateNestedManyWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessCreateNestedManyWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateNestedManyWithoutTblUsersInput>;
export const tblUserAccessCreateNestedManyWithoutTblUsersInputObjectZodSchema = makeSchema();
