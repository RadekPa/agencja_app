import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblSeriesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblSeriesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesOrderByRelationAggregateInput>;
export const tblSeriesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
