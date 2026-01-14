import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  BankName: z.string(),
  BankAddress: z.string().optional().nullable(),
  AccountNo: z.string().optional().nullable(),
  RoutingNo: z.string().optional().nullable(),
  AccountName: z.string().optional().nullable()
}).strict();
export const tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustBankUncheckedCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankUncheckedCreateWithoutTblCustomersInput>;
export const tblCustBankUncheckedCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
