import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema as tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema } from './tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInput.schema'

const makeSchema = () => z.object({
  tblCustomers: z.lazy(() => tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema).optional()
}).strict();
export const tblCustUsersUpdateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpdateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpdateWithoutTblUsersInput>;
export const tblCustUsersUpdateWithoutTblUsersInputObjectZodSchema = makeSchema();
