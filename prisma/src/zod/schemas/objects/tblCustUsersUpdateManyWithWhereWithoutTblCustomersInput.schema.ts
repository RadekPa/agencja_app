import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersScalarWhereInputObjectSchema as tblCustUsersScalarWhereInputObjectSchema } from './tblCustUsersScalarWhereInput.schema';
import { tblCustUsersUpdateManyMutationInputObjectSchema as tblCustUsersUpdateManyMutationInputObjectSchema } from './tblCustUsersUpdateManyMutationInput.schema';
import { tblCustUsersUncheckedUpdateManyWithoutTblCustomersInputObjectSchema as tblCustUsersUncheckedUpdateManyWithoutTblCustomersInputObjectSchema } from './tblCustUsersUncheckedUpdateManyWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustUsersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblCustUsersUpdateManyMutationInputObjectSchema), z.lazy(() => tblCustUsersUncheckedUpdateManyWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustUsersUpdateManyWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpdateManyWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpdateManyWithWhereWithoutTblCustomersInput>;
export const tblCustUsersUpdateManyWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
