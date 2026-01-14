import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersUpdateWithoutTblCustUsersInputObjectSchema as tblCustomersUpdateWithoutTblCustUsersInputObjectSchema } from './tblCustomersUpdateWithoutTblCustUsersInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustUsersInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustUsersInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustUsersInputObjectSchema)])
}).strict();
export const tblCustomersUpdateToOneWithWhereWithoutTblCustUsersInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblCustUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblCustUsersInput>;
export const tblCustomersUpdateToOneWithWhereWithoutTblCustUsersInputObjectZodSchema = makeSchema();
