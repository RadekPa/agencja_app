import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema as tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema } from './tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInput.schema';
import { tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema as tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema } from './tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInput.schema'

const makeSchema = () => z.object({
  tblCustomers: z.lazy(() => tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema).optional(),
  tblUsers: z.lazy(() => tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema).optional()
}).strict();
export const tblCustUsersUpdateInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpdateInput>;
export const tblCustUsersUpdateInputObjectZodSchema = makeSchema();
