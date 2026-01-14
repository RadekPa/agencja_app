import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersCreateWithoutTblUsersInputObjectSchema as tblCustUsersCreateWithoutTblUsersInputObjectSchema } from './tblCustUsersCreateWithoutTblUsersInput.schema';
import { tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema as tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblCustUsersUncheckedCreateWithoutTblUsersInput.schema';
import { tblCustUsersCreateOrConnectWithoutTblUsersInputObjectSchema as tblCustUsersCreateOrConnectWithoutTblUsersInputObjectSchema } from './tblCustUsersCreateOrConnectWithoutTblUsersInput.schema';
import { tblCustUsersCreateManyTblUsersInputEnvelopeObjectSchema as tblCustUsersCreateManyTblUsersInputEnvelopeObjectSchema } from './tblCustUsersCreateManyTblUsersInputEnvelope.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './tblCustUsersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustUsersCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersCreateWithoutTblUsersInputObjectSchema).array(), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustUsersCreateOrConnectWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersCreateOrConnectWithoutTblUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustUsersCreateManyTblUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema), z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblCustUsersCreateNestedManyWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersCreateNestedManyWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateNestedManyWithoutTblUsersInput>;
export const tblCustUsersCreateNestedManyWithoutTblUsersInputObjectZodSchema = makeSchema();
