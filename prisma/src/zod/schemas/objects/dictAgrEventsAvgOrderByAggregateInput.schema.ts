import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AgrEventCode: SortOrderSchema.optional()
}).strict();
export const dictAgrEventsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAgrEventsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsAvgOrderByAggregateInput>;
export const dictAgrEventsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
