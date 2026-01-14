import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AgrEventCode: SortOrderSchema.optional(),
  AgrEventDesc: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional()
}).strict();
export const dictAgrEventsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAgrEventsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsMaxOrderByAggregateInput>;
export const dictAgrEventsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
