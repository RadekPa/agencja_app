import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersCreateNestedOneWithoutTblCustUsersInputObjectSchema as tblUsersCreateNestedOneWithoutTblCustUsersInputObjectSchema } from './tblUsersCreateNestedOneWithoutTblCustUsersInput.schema'

const makeSchema = () => z.object({
  tblUsers: z.lazy(() => tblUsersCreateNestedOneWithoutTblCustUsersInputObjectSchema)
}).strict();
export const tblCustUsersCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateWithoutTblCustomersInput>;
export const tblCustUsersCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
