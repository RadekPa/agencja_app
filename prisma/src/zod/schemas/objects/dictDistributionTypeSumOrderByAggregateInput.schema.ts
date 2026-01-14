import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  DistID: SortOrderSchema.optional()
}).strict();
export const dictDistributionTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeSumOrderByAggregateInput>;
export const dictDistributionTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
