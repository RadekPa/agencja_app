import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutTblCustUsersInputObjectSchema as tblCustomersCreateWithoutTblCustUsersInputObjectSchema } from './tblCustomersCreateWithoutTblCustUsersInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutTblCustUsersInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblCustUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblCustUsersInput>;
export const tblCustomersCreateOrConnectWithoutTblCustUsersInputObjectZodSchema = makeSchema();
