import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './tblCustUsersWhereUniqueInput.schema';
import { tblCustUsersUpdateWithoutTblUsersInputObjectSchema as tblCustUsersUpdateWithoutTblUsersInputObjectSchema } from './tblCustUsersUpdateWithoutTblUsersInput.schema';
import { tblCustUsersUncheckedUpdateWithoutTblUsersInputObjectSchema as tblCustUsersUncheckedUpdateWithoutTblUsersInputObjectSchema } from './tblCustUsersUncheckedUpdateWithoutTblUsersInput.schema';
import { tblCustUsersCreateWithoutTblUsersInputObjectSchema as tblCustUsersCreateWithoutTblUsersInputObjectSchema } from './tblCustUsersCreateWithoutTblUsersInput.schema';
import { tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema as tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblCustUsersUncheckedCreateWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblCustUsersUpdateWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedUpdateWithoutTblUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustUsersCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblCustUsersUpsertWithWhereUniqueWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpsertWithWhereUniqueWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpsertWithWhereUniqueWithoutTblUsersInput>;
export const tblCustUsersUpsertWithWhereUniqueWithoutTblUsersInputObjectZodSchema = makeSchema();
