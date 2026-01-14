import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustTypeID: z.literal(true).optional(),
  CustTypeName: z.literal(true).optional(),
  CustTypeDesc: z.literal(true).optional()
}).strict();
export const DictCustTypesMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictCustTypesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCustTypesMaxAggregateInputType>;
export const DictCustTypesMaxAggregateInputObjectZodSchema = makeSchema();
