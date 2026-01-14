import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustTypeID: z.literal(true).optional()
}).strict();
export const DictCustTypesAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictCustTypesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCustTypesAvgAggregateInputType>;
export const DictCustTypesAvgAggregateInputObjectZodSchema = makeSchema();
