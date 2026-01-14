import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  CustTypeID: z.literal(true).optional()
}).strict();
export const TblCustTypesSumAggregateInputObjectSchema: z.ZodType<Prisma.TblCustTypesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustTypesSumAggregateInputType>;
export const TblCustTypesSumAggregateInputObjectZodSchema = makeSchema();
