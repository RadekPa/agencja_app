import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './tblUsersWhereInput.schema';
import { tblUsersUpdateWithoutTblUserParamsInputObjectSchema as tblUsersUpdateWithoutTblUserParamsInputObjectSchema } from './tblUsersUpdateWithoutTblUserParamsInput.schema';
import { tblUsersUncheckedUpdateWithoutTblUserParamsInputObjectSchema as tblUsersUncheckedUpdateWithoutTblUserParamsInputObjectSchema } from './tblUsersUncheckedUpdateWithoutTblUserParamsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUsersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblUsersUpdateWithoutTblUserParamsInputObjectSchema), z.lazy(() => tblUsersUncheckedUpdateWithoutTblUserParamsInputObjectSchema)])
}).strict();
export const tblUsersUpdateToOneWithWhereWithoutTblUserParamsInputObjectSchema: z.ZodType<Prisma.tblUsersUpdateToOneWithWhereWithoutTblUserParamsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersUpdateToOneWithWhereWithoutTblUserParamsInput>;
export const tblUsersUpdateToOneWithWhereWithoutTblUserParamsInputObjectZodSchema = makeSchema();
