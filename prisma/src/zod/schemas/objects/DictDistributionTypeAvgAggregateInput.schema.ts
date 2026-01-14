import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DistID: z.literal(true).optional()
}).strict();
export const DictDistributionTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictDistributionTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictDistributionTypeAvgAggregateInputType>;
export const DictDistributionTypeAvgAggregateInputObjectZodSchema = makeSchema();
