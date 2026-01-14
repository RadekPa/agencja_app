import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustTypeID: z.literal(true).optional()
}).strict();
export const DictCustTypesSumAggregateInputObjectSchema: z.ZodType<Prisma.DictCustTypesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCustTypesSumAggregateInputType>;
export const DictCustTypesSumAggregateInputObjectZodSchema = makeSchema();
