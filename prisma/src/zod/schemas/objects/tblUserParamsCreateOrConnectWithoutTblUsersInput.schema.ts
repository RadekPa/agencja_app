import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserParamsWhereUniqueInputObjectSchema as tblUserParamsWhereUniqueInputObjectSchema } from './tblUserParamsWhereUniqueInput.schema';
import { tblUserParamsCreateWithoutTblUsersInputObjectSchema as tblUserParamsCreateWithoutTblUsersInputObjectSchema } from './tblUserParamsCreateWithoutTblUsersInput.schema';
import { tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema as tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblUserParamsUncheckedCreateWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblUserParamsCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblUserParamsCreateOrConnectWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserParamsCreateOrConnectWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsCreateOrConnectWithoutTblUsersInput>;
export const tblUserParamsCreateOrConnectWithoutTblUsersInputObjectZodSchema = makeSchema();
