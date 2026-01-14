import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const LocalUserAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LocalUserAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserAvgOrderByAggregateInput>;
export const LocalUserAvgOrderByAggregateInputObjectZodSchema = makeSchema();
