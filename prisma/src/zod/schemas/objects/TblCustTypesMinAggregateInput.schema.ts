import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  CustTypeID: z.literal(true).optional()
}).strict();
export const TblCustTypesMinAggregateInputObjectSchema: z.ZodType<Prisma.TblCustTypesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustTypesMinAggregateInputType>;
export const TblCustTypesMinAggregateInputObjectZodSchema = makeSchema();
