import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateNestedOneWithoutTblCustUsersInputObjectSchema as tblCustomersCreateNestedOneWithoutTblCustUsersInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblCustUsersInput.schema';
import { tblUsersCreateNestedOneWithoutTblCustUsersInputObjectSchema as tblUsersCreateNestedOneWithoutTblCustUsersInputObjectSchema } from './tblUsersCreateNestedOneWithoutTblCustUsersInput.schema'

const makeSchema = () => z.object({
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblCustUsersInputObjectSchema),
  tblUsers: z.lazy(() => tblUsersCreateNestedOneWithoutTblCustUsersInputObjectSchema)
}).strict();
export const tblCustUsersCreateInputObjectSchema: z.ZodType<Prisma.tblCustUsersCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateInput>;
export const tblCustUsersCreateInputObjectZodSchema = makeSchema();
