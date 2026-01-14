import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional()
}).strict();
export const TblCustBankSumAggregateInputObjectSchema: z.ZodType<Prisma.TblCustBankSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustBankSumAggregateInputType>;
export const TblCustBankSumAggregateInputObjectZodSchema = makeSchema();
