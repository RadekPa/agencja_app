import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional()
}).strict();
export const TblCustBankAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblCustBankAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustBankAvgAggregateInputType>;
export const TblCustBankAvgAggregateInputObjectZodSchema = makeSchema();
