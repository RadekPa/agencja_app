import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema as tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema } from './tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInput.schema'

const makeSchema = () => z.object({
  tblUsers: z.lazy(() => tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema).optional()
}).strict();
export const tblCustUsersUpdateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUpdateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUpdateWithoutTblCustomersInput>;
export const tblCustUsersUpdateWithoutTblCustomersInputObjectZodSchema = makeSchema();
