import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserParamsWhereUniqueInputObjectSchema as tblUserParamsWhereUniqueInputObjectSchema } from './tblUserParamsWhereUniqueInput.schema';
import { tblUserParamsUpdateWithoutTblUsersInputObjectSchema as tblUserParamsUpdateWithoutTblUsersInputObjectSchema } from './tblUserParamsUpdateWithoutTblUsersInput.schema';
import { tblUserParamsUncheckedUpdateWithoutTblUsersInputObjectSchema as tblUserParamsUncheckedUpdateWithoutTblUsersInputObjectSchema } from './tblUserParamsUncheckedUpdateWithoutTblUsersInput.schema';
import { tblUserParamsCreateWithoutTblUsersInputObjectSchema as tblUserParamsCreateWithoutTblUsersInputObjectSchema } from './tblUserParamsCreateWithoutTblUsersInput.schema';
import { tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema as tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblUserParamsUncheckedCreateWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserParamsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblUserParamsUpdateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsUncheckedUpdateWithoutTblUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblUserParamsCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblUserParamsUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserParamsUpsertWithWhereUniqueWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUpsertWithWhereUniqueWithoutTblUsersInput>;
export const tblUserParamsUpsertWithWhereUniqueWithoutTblUsersInputObjectZodSchema = makeSchema();
