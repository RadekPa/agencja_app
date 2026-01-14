import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  DistID: SortOrderSchema.optional(),
  DistDesc: SortOrderSchema.optional()
}).strict();
export const dictDistributionTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeMinOrderByAggregateInput>;
export const dictDistributionTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
