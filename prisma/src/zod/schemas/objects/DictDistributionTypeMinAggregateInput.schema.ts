import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DistID: z.literal(true).optional(),
  DistDesc: z.literal(true).optional()
}).strict();
export const DictDistributionTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.DictDistributionTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictDistributionTypeMinAggregateInputType>;
export const DictDistributionTypeMinAggregateInputObjectZodSchema = makeSchema();
