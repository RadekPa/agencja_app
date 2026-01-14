import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserParamsWhereUniqueInputObjectSchema as tblUserParamsWhereUniqueInputObjectSchema } from './tblUserParamsWhereUniqueInput.schema';
import { tblUserParamsUpdateWithoutTblUsersInputObjectSchema as tblUserParamsUpdateWithoutTblUsersInputObjectSchema } from './tblUserParamsUpdateWithoutTblUsersInput.schema';
import { tblUserParamsUncheckedUpdateWithoutTblUsersInputObjectSchema as tblUserParamsUncheckedUpdateWithoutTblUsersInputObjectSchema } from './tblUserParamsUncheckedUpdateWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblUserParamsUpdateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsUncheckedUpdateWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblUserParamsUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserParamsUpdateWithWhereUniqueWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUpdateWithWhereUniqueWithoutTblUsersInput>;
export const tblUserParamsUpdateWithWhereUniqueWithoutTblUsersInputObjectZodSchema = makeSchema();
