import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './tblCustUsersWhereUniqueInput.schema';
import { tblCustUsersCreateWithoutTblCustomersInputObjectSchema as tblCustUsersCreateWithoutTblCustomersInputObjectSchema } from './tblCustUsersCreateWithoutTblCustomersInput.schema';
import { tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustUsersUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustUsersCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustUsersCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateOrConnectWithoutTblCustomersInput>;
export const tblCustUsersCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
