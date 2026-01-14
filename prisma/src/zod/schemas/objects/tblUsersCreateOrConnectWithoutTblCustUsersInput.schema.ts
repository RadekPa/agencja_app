import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './tblUsersWhereUniqueInput.schema';
import { tblUsersCreateWithoutTblCustUsersInputObjectSchema as tblUsersCreateWithoutTblCustUsersInputObjectSchema } from './tblUsersCreateWithoutTblCustUsersInput.schema';
import { tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema as tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblCustUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUsersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema)])
}).strict();
export const tblUsersCreateOrConnectWithoutTblCustUsersInputObjectSchema: z.ZodType<Prisma.tblUsersCreateOrConnectWithoutTblCustUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersCreateOrConnectWithoutTblCustUsersInput>;
export const tblUsersCreateOrConnectWithoutTblCustUsersInputObjectZodSchema = makeSchema();
