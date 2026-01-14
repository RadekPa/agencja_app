import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  CustTypeID: z.literal(true).optional()
}).strict();
export const TblCustTypesAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblCustTypesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustTypesAvgAggregateInputType>;
export const TblCustTypesAvgAggregateInputObjectZodSchema = makeSchema();
