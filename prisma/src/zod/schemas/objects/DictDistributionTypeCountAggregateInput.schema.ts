import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DistID: z.literal(true).optional(),
  DistDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictDistributionTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.DictDistributionTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictDistributionTypeCountAggregateInputType>;
export const DictDistributionTypeCountAggregateInputObjectZodSchema = makeSchema();
