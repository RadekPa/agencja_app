import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgrRightsOrderByRelationAggregateInputObjectSchema as tblAgrRightsOrderByRelationAggregateInputObjectSchema } from './tblAgrRightsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: SortOrderSchema.optional(),
  RoyAccountIntervalDesc: SortOrderSchema.optional(),
  IntervalAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictRoyAccountIntervalOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalOrderByWithRelationInput>;
export const dictRoyAccountIntervalOrderByWithRelationInputObjectZodSchema = makeSchema();
