import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblTitEventsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblTitEventsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsOrderByRelationAggregateInput>;
export const tblTitEventsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
