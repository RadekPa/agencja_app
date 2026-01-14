import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './tblUsersWhereUniqueInput.schema';
import { tblUsersCreateWithoutTblUserAccessInputObjectSchema as tblUsersCreateWithoutTblUserAccessInputObjectSchema } from './tblUsersCreateWithoutTblUserAccessInput.schema';
import { tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema as tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblUserAccessInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUsersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema)])
}).strict();
export const tblUsersCreateOrConnectWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblUsersCreateOrConnectWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersCreateOrConnectWithoutTblUserAccessInput>;
export const tblUsersCreateOrConnectWithoutTblUserAccessInputObjectZodSchema = makeSchema();
