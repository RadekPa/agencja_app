import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersCreateWithoutTblCustUsersInputObjectSchema as tblUsersCreateWithoutTblCustUsersInputObjectSchema } from './tblUsersCreateWithoutTblCustUsersInput.schema';
import { tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema as tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblCustUsersInput.schema';
import { tblUsersCreateOrConnectWithoutTblCustUsersInputObjectSchema as tblUsersCreateOrConnectWithoutTblCustUsersInputObjectSchema } from './tblUsersCreateOrConnectWithoutTblCustUsersInput.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './tblUsersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblUsersCreateOrConnectWithoutTblCustUsersInputObjectSchema).optional(),
  connect: z.lazy(() => tblUsersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblUsersCreateNestedOneWithoutTblCustUsersInputObjectSchema: z.ZodType<Prisma.tblUsersCreateNestedOneWithoutTblCustUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersCreateNestedOneWithoutTblCustUsersInput>;
export const tblUsersCreateNestedOneWithoutTblCustUsersInputObjectZodSchema = makeSchema();
