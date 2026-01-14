import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  name: SortOrderSchema.optional(),
  principal_id: SortOrderSchema.optional(),
  diagram_id: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  definition: SortOrderSchema.optional()
}).strict();
export const sysdiagramsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.sysdiagramsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsMaxOrderByAggregateInput>;
export const sysdiagramsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
