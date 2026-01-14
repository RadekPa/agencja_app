import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './tblCustUsersWhereUniqueInput.schema';
import { tblCustUsersUpdateWithoutTblCustomersInputObjectSchema as tblCustUsersUpdateWithoutTblCustomersInputObjectSchema } from './tblCustUsersUpdateWithoutTblCustomersInput.schema';
import { tblCustUsersUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblCustUsersUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblCustUsersUncheckedUpdateWithoutTblCustomersInput.schema';
import { tblCustUsersCreateWithoutTblCustomersInputObjectSchema as tblCustUsersCreateWithoutTblCustomersInputObjectSchema } from './tblCustUsersCreateWithoutTblCustomersInput.schema';
import { tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustUsersUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblCustUsersUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustUsersCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustUsersUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpsertWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpsertWithWhereUniqueWithoutTblCustomersInput>;
export const tblCustUsersUpsertWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
