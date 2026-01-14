import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DistID: z.literal(true).optional()
}).strict();
export const DictDistributionTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.DictDistributionTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictDistributionTypeSumAggregateInputType>;
export const DictDistributionTypeSumAggregateInputObjectZodSchema = makeSchema();
