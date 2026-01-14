import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './tblUserAccessWhereUniqueInput.schema';
import { tblUserAccessUpdateWithoutTblUsersInputObjectSchema as tblUserAccessUpdateWithoutTblUsersInputObjectSchema } from './tblUserAccessUpdateWithoutTblUsersInput.schema';
import { tblUserAccessUncheckedUpdateWithoutTblUsersInputObjectSchema as tblUserAccessUncheckedUpdateWithoutTblUsersInputObjectSchema } from './tblUserAccessUncheckedUpdateWithoutTblUsersInput.schema';
import { tblUserAccessCreateWithoutTblUsersInputObjectSchema as tblUserAccessCreateWithoutTblUsersInputObjectSchema } from './tblUserAccessCreateWithoutTblUsersInput.schema';
import { tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema as tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblUserAccessUncheckedCreateWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblUserAccessUpdateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessUncheckedUpdateWithoutTblUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblUserAccessCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblUserAccessUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpsertWithWhereUniqueWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpsertWithWhereUniqueWithoutTblUsersInput>;
export const tblUserAccessUpsertWithWhereUniqueWithoutTblUsersInputObjectZodSchema = makeSchema();
