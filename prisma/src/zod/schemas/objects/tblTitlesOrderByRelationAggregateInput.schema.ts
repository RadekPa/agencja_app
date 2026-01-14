import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblTitlesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblTitlesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesOrderByRelationAggregateInput>;
export const tblTitlesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
