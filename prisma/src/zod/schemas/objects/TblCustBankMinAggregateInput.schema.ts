import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  BankName: z.literal(true).optional(),
  BankAddress: z.literal(true).optional(),
  AccountNo: z.literal(true).optional(),
  RoutingNo: z.literal(true).optional(),
  AccountName: z.literal(true).optional()
}).strict();
export const TblCustBankMinAggregateInputObjectSchema: z.ZodType<Prisma.TblCustBankMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustBankMinAggregateInputType>;
export const TblCustBankMinAggregateInputObjectZodSchema = makeSchema();
