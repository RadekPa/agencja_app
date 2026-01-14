import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersUpdateWithoutTblCustUsersInputObjectSchema as tblUsersUpdateWithoutTblCustUsersInputObjectSchema } from './tblUsersUpdateWithoutTblCustUsersInput.schema';
import { tblUsersUncheckedUpdateWithoutTblCustUsersInputObjectSchema as tblUsersUncheckedUpdateWithoutTblCustUsersInputObjectSchema } from './tblUsersUncheckedUpdateWithoutTblCustUsersInput.schema';
import { tblUsersCreateWithoutTblCustUsersInputObjectSchema as tblUsersCreateWithoutTblCustUsersInputObjectSchema } from './tblUsersCreateWithoutTblCustUsersInput.schema';
import { tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema as tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblCustUsersInput.schema';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './tblUsersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblUsersUpdateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblUsersUncheckedUpdateWithoutTblCustUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema)]),
  where: z.lazy(() => tblUsersWhereInputObjectSchema).optional()
}).strict();
export const tblUsersUpsertWithoutTblCustUsersInputObjectSchema: z.ZodType<Prisma.tblUsersUpsertWithoutTblCustUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersUpsertWithoutTblCustUsersInput>;
export const tblUsersUpsertWithoutTblCustUsersInputObjectZodSchema = makeSchema();
