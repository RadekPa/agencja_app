import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  CustTypeID: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblCustTypesCountAggregateInputObjectSchema: z.ZodType<Prisma.TblCustTypesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustTypesCountAggregateInputType>;
export const TblCustTypesCountAggregateInputObjectZodSchema = makeSchema();
