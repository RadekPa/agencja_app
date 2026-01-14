import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateWithoutTblCustUsersInputObjectSchema as tblCustomersUpdateWithoutTblCustUsersInputObjectSchema } from './tblCustomersUpdateWithoutTblCustUsersInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustUsersInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustUsersInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustUsersInput.schema';
import { tblCustomersCreateWithoutTblCustUsersInputObjectSchema as tblCustomersCreateWithoutTblCustUsersInputObjectSchema } from './tblCustomersCreateWithoutTblCustUsersInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustUsersInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema)]),
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const tblCustomersUpsertWithoutTblCustUsersInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithoutTblCustUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithoutTblCustUsersInput>;
export const tblCustomersUpsertWithoutTblCustUsersInputObjectZodSchema = makeSchema();
