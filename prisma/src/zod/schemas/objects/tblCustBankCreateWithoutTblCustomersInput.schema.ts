import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  BankName: z.string().max(150),
  BankAddress: z.string().max(150).optional().nullable(),
  AccountNo: z.string().max(50).optional().nullable(),
  RoutingNo: z.string().max(50).optional().nullable(),
  AccountName: z.string().max(250).optional().nullable()
}).strict();
export const tblCustBankCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustBankCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankCreateWithoutTblCustomersInput>;
export const tblCustBankCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
