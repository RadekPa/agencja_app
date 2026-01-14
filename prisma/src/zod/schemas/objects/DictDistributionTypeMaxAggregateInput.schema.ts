import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DistID: z.literal(true).optional(),
  DistDesc: z.literal(true).optional()
}).strict();
export const DictDistributionTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictDistributionTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictDistributionTypeMaxAggregateInputType>;
export const DictDistributionTypeMaxAggregateInputObjectZodSchema = makeSchema();
