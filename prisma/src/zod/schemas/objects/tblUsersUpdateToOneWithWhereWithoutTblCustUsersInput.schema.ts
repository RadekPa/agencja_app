import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './tblUsersWhereInput.schema';
import { tblUsersUpdateWithoutTblCustUsersInputObjectSchema as tblUsersUpdateWithoutTblCustUsersInputObjectSchema } from './tblUsersUpdateWithoutTblCustUsersInput.schema';
import { tblUsersUncheckedUpdateWithoutTblCustUsersInputObjectSchema as tblUsersUncheckedUpdateWithoutTblCustUsersInputObjectSchema } from './tblUsersUncheckedUpdateWithoutTblCustUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUsersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblUsersUpdateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblUsersUncheckedUpdateWithoutTblCustUsersInputObjectSchema)])
}).strict();
export const tblUsersUpdateToOneWithWhereWithoutTblCustUsersInputObjectSchema: z.ZodType<Prisma.tblUsersUpdateToOneWithWhereWithoutTblCustUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersUpdateToOneWithWhereWithoutTblCustUsersInput>;
export const tblUsersUpdateToOneWithWhereWithoutTblCustUsersInputObjectZodSchema = makeSchema();
