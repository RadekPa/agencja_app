import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersScalarWhereInputObjectSchema as tblCustUsersScalarWhereInputObjectSchema } from './tblCustUsersScalarWhereInput.schema';
import { tblCustUsersUpdateManyMutationInputObjectSchema as tblCustUsersUpdateManyMutationInputObjectSchema } from './tblCustUsersUpdateManyMutationInput.schema';
import { tblCustUsersUncheckedUpdateManyWithoutTblUsersInputObjectSchema as tblCustUsersUncheckedUpdateManyWithoutTblUsersInputObjectSchema } from './tblCustUsersUncheckedUpdateManyWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustUsersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblCustUsersUpdateManyMutationInputObjectSchema), z.lazy(() => tblCustUsersUncheckedUpdateManyWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblCustUsersUpdateManyWithWhereWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpdateManyWithWhereWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpdateManyWithWhereWithoutTblUsersInput>;
export const tblCustUsersUpdateManyWithWhereWithoutTblUsersInputObjectZodSchema = makeSchema();
