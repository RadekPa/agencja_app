import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema'

const makeSchema = () => z.object({
  CustID: z.boolean().optional(),
  BankName: z.boolean().optional(),
  BankAddress: z.boolean().optional(),
  AccountNo: z.boolean().optional(),
  RoutingNo: z.boolean().optional(),
  AccountName: z.boolean().optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional()
}).strict();
export const tblCustBankSelectObjectSchema: z.ZodType<Prisma.tblCustBankSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankSelect>;
export const tblCustBankSelectObjectZodSchema = makeSchema();
