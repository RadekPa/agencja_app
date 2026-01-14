import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  principal_id: SortOrderSchema.optional(),
  diagram_id: SortOrderSchema.optional(),
  version: SortOrderSchema.optional()
}).strict();
export const sysdiagramsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.sysdiagramsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsSumOrderByAggregateInput>;
export const sysdiagramsSumOrderByAggregateInputObjectZodSchema = makeSchema();
