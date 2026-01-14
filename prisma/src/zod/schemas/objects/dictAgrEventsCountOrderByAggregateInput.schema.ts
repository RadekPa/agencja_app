import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AgrEventCode: SortOrderSchema.optional(),
  AgrEventDesc: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional()
}).strict();
export const dictAgrEventsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictAgrEventsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsCountOrderByAggregateInput>;
export const dictAgrEventsCountOrderByAggregateInputObjectZodSchema = makeSchema();
