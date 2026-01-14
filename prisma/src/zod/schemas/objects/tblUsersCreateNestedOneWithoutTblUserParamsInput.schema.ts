import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersCreateWithoutTblUserParamsInputObjectSchema as tblUsersCreateWithoutTblUserParamsInputObjectSchema } from './tblUsersCreateWithoutTblUserParamsInput.schema';
import { tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema as tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblUserParamsInput.schema';
import { tblUsersCreateOrConnectWithoutTblUserParamsInputObjectSchema as tblUsersCreateOrConnectWithoutTblUserParamsInputObjectSchema } from './tblUsersCreateOrConnectWithoutTblUserParamsInput.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './tblUsersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblUserParamsInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblUsersCreateOrConnectWithoutTblUserParamsInputObjectSchema).optional(),
  connect: z.lazy(() => tblUsersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblUsersCreateNestedOneWithoutTblUserParamsInputObjectSchema: z.ZodType<Prisma.tblUsersCreateNestedOneWithoutTblUserParamsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersCreateNestedOneWithoutTblUserParamsInput>;
export const tblUsersCreateNestedOneWithoutTblUserParamsInputObjectZodSchema = makeSchema();
