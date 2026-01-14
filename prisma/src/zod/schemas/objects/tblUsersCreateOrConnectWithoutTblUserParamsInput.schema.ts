import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './tblUsersWhereUniqueInput.schema';
import { tblUsersCreateWithoutTblUserParamsInputObjectSchema as tblUsersCreateWithoutTblUserParamsInputObjectSchema } from './tblUsersCreateWithoutTblUserParamsInput.schema';
import { tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema as tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblUserParamsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUsersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblUserParamsInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema)])
}).strict();
export const tblUsersCreateOrConnectWithoutTblUserParamsInputObjectSchema: z.ZodType<Prisma.tblUsersCreateOrConnectWithoutTblUserParamsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersCreateOrConnectWithoutTblUserParamsInput>;
export const tblUsersCreateOrConnectWithoutTblUserParamsInputObjectZodSchema = makeSchema();
