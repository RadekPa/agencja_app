import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int(),
  BankName: z.string().max(150),
  BankAddress: z.string().max(150).optional().nullable(),
  AccountNo: z.string().max(50).optional().nullable(),
  RoutingNo: z.string().max(50).optional().nullable(),
  AccountName: z.string().max(250).optional().nullable()
}).strict();
export const tblCustBankUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblCustBankUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankUncheckedCreateInput>;
export const tblCustBankUncheckedCreateInputObjectZodSchema = makeSchema();
