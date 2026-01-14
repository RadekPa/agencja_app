import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema'

const makeSchema = () => z.object({
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional()
}).strict();
export const tblCustBankIncludeObjectSchema: z.ZodType<Prisma.tblCustBankInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankInclude>;
export const tblCustBankIncludeObjectZodSchema = makeSchema();
