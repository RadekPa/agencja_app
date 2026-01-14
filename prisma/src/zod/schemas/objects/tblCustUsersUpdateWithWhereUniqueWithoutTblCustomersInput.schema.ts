import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './tblCustUsersWhereUniqueInput.schema';
import { tblCustUsersUpdateWithoutTblCustomersInputObjectSchema as tblCustUsersUpdateWithoutTblCustomersInputObjectSchema } from './tblCustUsersUpdateWithoutTblCustomersInput.schema';
import { tblCustUsersUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblCustUsersUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblCustUsersUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblCustUsersUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustUsersUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpdateWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpdateWithWhereUniqueWithoutTblCustomersInput>;
export const tblCustUsersUpdateWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
