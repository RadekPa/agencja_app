import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersUpdateWithoutTblUserAccessInputObjectSchema as tblUsersUpdateWithoutTblUserAccessInputObjectSchema } from './tblUsersUpdateWithoutTblUserAccessInput.schema';
import { tblUsersUncheckedUpdateWithoutTblUserAccessInputObjectSchema as tblUsersUncheckedUpdateWithoutTblUserAccessInputObjectSchema } from './tblUsersUncheckedUpdateWithoutTblUserAccessInput.schema';
import { tblUsersCreateWithoutTblUserAccessInputObjectSchema as tblUsersCreateWithoutTblUserAccessInputObjectSchema } from './tblUsersCreateWithoutTblUserAccessInput.schema';
import { tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema as tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblUserAccessInput.schema';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './tblUsersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblUsersUpdateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblUsersUncheckedUpdateWithoutTblUserAccessInputObjectSchema)]),
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema)]),
  where: z.lazy(() => tblUsersWhereInputObjectSchema).optional()
}).strict();
export const tblUsersUpsertWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblUsersUpsertWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersUpsertWithoutTblUserAccessInput>;
export const tblUsersUpsertWithoutTblUserAccessInputObjectZodSchema = makeSchema();
