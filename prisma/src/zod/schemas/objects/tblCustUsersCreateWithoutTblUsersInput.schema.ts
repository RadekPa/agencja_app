import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateNestedOneWithoutTblCustUsersInputObjectSchema as tblCustomersCreateNestedOneWithoutTblCustUsersInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblCustUsersInput.schema'

const makeSchema = () => z.object({
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblCustUsersInputObjectSchema)
}).strict();
export const tblCustUsersCreateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersCreateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateWithoutTblUsersInput>;
export const tblCustUsersCreateWithoutTblUsersInputObjectZodSchema = makeSchema();
