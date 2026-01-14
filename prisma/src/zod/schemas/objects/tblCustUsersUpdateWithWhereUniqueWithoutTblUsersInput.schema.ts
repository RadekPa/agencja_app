import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './tblCustUsersWhereUniqueInput.schema';
import { tblCustUsersUpdateWithoutTblUsersInputObjectSchema as tblCustUsersUpdateWithoutTblUsersInputObjectSchema } from './tblCustUsersUpdateWithoutTblUsersInput.schema';
import { tblCustUsersUncheckedUpdateWithoutTblUsersInputObjectSchema as tblCustUsersUncheckedUpdateWithoutTblUsersInputObjectSchema } from './tblCustUsersUncheckedUpdateWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustUsersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblCustUsersUpdateWithoutTblUsersInputObjectSchema), z.lazy(() => tblCustUsersUncheckedUpdateWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblCustUsersUpdateWithWhereUniqueWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpdateWithWhereUniqueWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpdateWithWhereUniqueWithoutTblUsersInput>;
export const tblCustUsersUpdateWithWhereUniqueWithoutTblUsersInputObjectZodSchema = makeSchema();
