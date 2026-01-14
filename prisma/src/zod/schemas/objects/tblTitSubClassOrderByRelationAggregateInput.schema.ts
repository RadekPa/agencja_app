import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblTitSubClassOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblTitSubClassOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassOrderByRelationAggregateInput>;
export const tblTitSubClassOrderByRelationAggregateInputObjectZodSchema = makeSchema();
