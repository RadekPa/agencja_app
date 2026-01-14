import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblCustUsersInputObjectSchema as tblCustomersCreateWithoutTblCustUsersInputObjectSchema } from './tblCustomersCreateWithoutTblCustUsersInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustUsersInput.schema';
import { tblCustomersCreateOrConnectWithoutTblCustUsersInputObjectSchema as tblCustomersCreateOrConnectWithoutTblCustUsersInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblCustUsersInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblCustUsersInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateNestedOneWithoutTblCustUsersInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblCustUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblCustUsersInput>;
export const tblCustomersCreateNestedOneWithoutTblCustUsersInputObjectZodSchema = makeSchema();
