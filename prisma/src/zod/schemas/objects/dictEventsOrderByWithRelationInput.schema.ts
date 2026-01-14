import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblSubmEventsOrderByRelationAggregateInputObjectSchema as tblSubmEventsOrderByRelationAggregateInputObjectSchema } from './tblSubmEventsOrderByRelationAggregateInput.schema';
import { tblTitEventsOrderByRelationAggregateInputObjectSchema as tblTitEventsOrderByRelationAggregateInputObjectSchema } from './tblTitEventsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  EventCode: SortOrderSchema.optional(),
  EventDesc: SortOrderSchema.optional(),
  tblSubmEvents: z.lazy(() => tblSubmEventsOrderByRelationAggregateInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictEventsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictEventsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsOrderByWithRelationInput>;
export const dictEventsOrderByWithRelationInputObjectZodSchema = makeSchema();
