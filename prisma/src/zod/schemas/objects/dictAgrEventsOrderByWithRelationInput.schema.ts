import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgrEventsOrderByRelationAggregateInputObjectSchema as tblAgrEventsOrderByRelationAggregateInputObjectSchema } from './tblAgrEventsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  AgrEventCode: SortOrderSchema.optional(),
  AgrEventDesc: SortOrderSchema.optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgrEvents: z.lazy(() => tblAgrEventsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictAgrEventsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictAgrEventsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsOrderByWithRelationInput>;
export const dictAgrEventsOrderByWithRelationInputObjectZodSchema = makeSchema();
