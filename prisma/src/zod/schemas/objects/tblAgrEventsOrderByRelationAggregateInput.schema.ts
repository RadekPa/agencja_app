import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblAgrEventsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblAgrEventsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsOrderByRelationAggregateInput>;
export const tblAgrEventsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
