import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersUpdateWithoutTblUserParamsInputObjectSchema as tblUsersUpdateWithoutTblUserParamsInputObjectSchema } from './tblUsersUpdateWithoutTblUserParamsInput.schema';
import { tblUsersUncheckedUpdateWithoutTblUserParamsInputObjectSchema as tblUsersUncheckedUpdateWithoutTblUserParamsInputObjectSchema } from './tblUsersUncheckedUpdateWithoutTblUserParamsInput.schema';
import { tblUsersCreateWithoutTblUserParamsInputObjectSchema as tblUsersCreateWithoutTblUserParamsInputObjectSchema } from './tblUsersCreateWithoutTblUserParamsInput.schema';
import { tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema as tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblUserParamsInput.schema';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './tblUsersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblUsersUpdateWithoutTblUserParamsInputObjectSchema), z.lazy(() => tblUsersUncheckedUpdateWithoutTblUserParamsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblUserParamsInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema)]),
  where: z.lazy(() => tblUsersWhereInputObjectSchema).optional()
}).strict();
export const tblUsersUpsertWithoutTblUserParamsInputObjectSchema: z.ZodType<Prisma.tblUsersUpsertWithoutTblUserParamsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersUpsertWithoutTblUserParamsInput>;
export const tblUsersUpsertWithoutTblUserParamsInputObjectZodSchema = makeSchema();
