import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateNestedOneWithoutTblCustBankInputObjectSchema as tblCustomersCreateNestedOneWithoutTblCustBankInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblCustBankInput.schema'

const makeSchema = () => z.object({
  BankName: z.string().max(150),
  BankAddress: z.string().max(150).optional().nullable(),
  AccountNo: z.string().max(50).optional().nullable(),
  RoutingNo: z.string().max(50).optional().nullable(),
  AccountName: z.string().max(250).optional().nullable(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblCustBankInputObjectSchema)
}).strict();
export const tblCustBankCreateInputObjectSchema: z.ZodType<Prisma.tblCustBankCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankCreateInput>;
export const tblCustBankCreateInputObjectZodSchema = makeSchema();
