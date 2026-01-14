import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersCreateWithoutTblUserAccessInputObjectSchema as tblUsersCreateWithoutTblUserAccessInputObjectSchema } from './tblUsersCreateWithoutTblUserAccessInput.schema';
import { tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema as tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblUserAccessInput.schema';
import { tblUsersCreateOrConnectWithoutTblUserAccessInputObjectSchema as tblUsersCreateOrConnectWithoutTblUserAccessInputObjectSchema } from './tblUsersCreateOrConnectWithoutTblUserAccessInput.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './tblUsersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblUsersCreateOrConnectWithoutTblUserAccessInputObjectSchema).optional(),
  connect: z.lazy(() => tblUsersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblUsersCreateNestedOneWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblUsersCreateNestedOneWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersCreateNestedOneWithoutTblUserAccessInput>;
export const tblUsersCreateNestedOneWithoutTblUserAccessInputObjectZodSchema = makeSchema();
