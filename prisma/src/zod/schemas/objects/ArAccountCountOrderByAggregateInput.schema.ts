import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AccountID: SortOrderSchema.optional(),
  AccountDescription: SortOrderSchema.optional()
}).strict();
export const ArAccountCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArAccountCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountCountOrderByAggregateInput>;
export const ArAccountCountOrderByAggregateInputObjectZodSchema = makeSchema();
