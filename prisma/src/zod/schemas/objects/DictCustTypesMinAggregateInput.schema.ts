import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustTypeID: z.literal(true).optional(),
  CustTypeName: z.literal(true).optional(),
  CustTypeDesc: z.literal(true).optional()
}).strict();
export const DictCustTypesMinAggregateInputObjectSchema: z.ZodType<Prisma.DictCustTypesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCustTypesMinAggregateInputType>;
export const DictCustTypesMinAggregateInputObjectZodSchema = makeSchema();
