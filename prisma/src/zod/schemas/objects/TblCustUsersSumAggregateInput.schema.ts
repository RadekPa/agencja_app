import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional()
}).strict();
export const TblCustUsersSumAggregateInputObjectSchema: z.ZodType<Prisma.TblCustUsersSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustUsersSumAggregateInputType>;
export const TblCustUsersSumAggregateInputObjectZodSchema = makeSchema();
