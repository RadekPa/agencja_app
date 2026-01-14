import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserParamsCreateWithoutTblUsersInputObjectSchema as tblUserParamsCreateWithoutTblUsersInputObjectSchema } from './tblUserParamsCreateWithoutTblUsersInput.schema';
import { tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema as tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblUserParamsUncheckedCreateWithoutTblUsersInput.schema';
import { tblUserParamsCreateOrConnectWithoutTblUsersInputObjectSchema as tblUserParamsCreateOrConnectWithoutTblUsersInputObjectSchema } from './tblUserParamsCreateOrConnectWithoutTblUsersInput.schema';
import { tblUserParamsCreateManyTblUsersInputEnvelopeObjectSchema as tblUserParamsCreateManyTblUsersInputEnvelopeObjectSchema } from './tblUserParamsCreateManyTblUsersInputEnvelope.schema';
import { tblUserParamsWhereUniqueInputObjectSchema as tblUserParamsWhereUniqueInputObjectSchema } from './tblUserParamsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUserParamsCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsCreateWithoutTblUsersInputObjectSchema).array(), z.lazy(() => tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblUserParamsCreateOrConnectWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsCreateOrConnectWithoutTblUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblUserParamsCreateManyTblUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema), z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblUserParamsUncheckedCreateNestedManyWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserParamsUncheckedCreateNestedManyWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUncheckedCreateNestedManyWithoutTblUsersInput>;
export const tblUserParamsUncheckedCreateNestedManyWithoutTblUsersInputObjectZodSchema = makeSchema();
