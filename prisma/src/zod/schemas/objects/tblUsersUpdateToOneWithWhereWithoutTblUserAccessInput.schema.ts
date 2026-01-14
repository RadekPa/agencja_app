import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './tblUsersWhereInput.schema';
import { tblUsersUpdateWithoutTblUserAccessInputObjectSchema as tblUsersUpdateWithoutTblUserAccessInputObjectSchema } from './tblUsersUpdateWithoutTblUserAccessInput.schema';
import { tblUsersUncheckedUpdateWithoutTblUserAccessInputObjectSchema as tblUsersUncheckedUpdateWithoutTblUserAccessInputObjectSchema } from './tblUsersUncheckedUpdateWithoutTblUserAccessInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUsersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblUsersUpdateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblUsersUncheckedUpdateWithoutTblUserAccessInputObjectSchema)])
}).strict();
export const tblUsersUpdateToOneWithWhereWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblUsersUpdateToOneWithWhereWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersUpdateToOneWithWhereWithoutTblUserAccessInput>;
export const tblUsersUpdateToOneWithWhereWithoutTblUserAccessInputObjectZodSchema = makeSchema();
