import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblSubmissionsOrderByRelationAggregateInputObjectSchema as tblSubmissionsOrderByRelationAggregateInputObjectSchema } from './tblSubmissionsOrderByRelationAggregateInput.schema';
import { tblTitEventsOrderByRelationAggregateInputObjectSchema as tblTitEventsOrderByRelationAggregateInputObjectSchema } from './tblTitEventsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  CopyTypeID: SortOrderSchema.optional(),
  CopyType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsOrderByRelationAggregateInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictCopyTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictCopyTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeOrderByWithRelationInput>;
export const dictCopyTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
