import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersCreateWithoutTblCustomersInputObjectSchema as tblCustUsersCreateWithoutTblCustomersInputObjectSchema } from './tblCustUsersCreateWithoutTblCustomersInput.schema';
import { tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustUsersUncheckedCreateWithoutTblCustomersInput.schema';
import { tblCustUsersCreateOrConnectWithoutTblCustomersInputObjectSchema as tblCustUsersCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblCustUsersCreateOrConnectWithoutTblCustomersInput.schema';
import { tblCustUsersCreateManyTblCustomersInputEnvelopeObjectSchema as tblCustUsersCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblCustUsersCreateManyTblCustomersInputEnvelope.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './tblCustUsersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustUsersCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustUsersCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustUsersCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema), z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblCustUsersCreateNestedManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersCreateNestedManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateNestedManyWithoutTblCustomersInput>;
export const tblCustUsersCreateNestedManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
