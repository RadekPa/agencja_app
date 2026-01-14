import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './tblCustUsersWhereUniqueInput.schema';
import { tblCustUsersCreateWithoutTblUsersInputObjectSchema as tblCustUsersCreateWithoutTblUsersInputObjectSchema } from './tblCustUsersCreateWithoutTblUsersInput.schema';
import { tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema as tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblCustUsersUncheckedCreateWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustUsersCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblCustUsersCreateOrConnectWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersCreateOrConnectWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateOrConnectWithoutTblUsersInput>;
export const tblCustUsersCreateOrConnectWithoutTblUsersInputObjectZodSchema = makeSchema();
