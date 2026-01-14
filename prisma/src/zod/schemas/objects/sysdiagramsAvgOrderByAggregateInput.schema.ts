import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  principal_id: SortOrderSchema.optional(),
  diagram_id: SortOrderSchema.optional(),
  version: SortOrderSchema.optional()
}).strict();
export const sysdiagramsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.sysdiagramsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsAvgOrderByAggregateInput>;
export const sysdiagramsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
