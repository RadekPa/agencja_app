import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  DistID: SortOrderSchema.optional()
}).strict();
export const dictDistributionTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeAvgOrderByAggregateInput>;
export const dictDistributionTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
