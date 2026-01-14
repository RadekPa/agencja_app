import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustTypeID: z.literal(true).optional(),
  CustTypeName: z.literal(true).optional(),
  CustTypeDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictCustTypesCountAggregateInputObjectSchema: z.ZodType<Prisma.DictCustTypesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCustTypesCountAggregateInputType>;
export const DictCustTypesCountAggregateInputObjectZodSchema = makeSchema();
