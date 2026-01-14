import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  TargetGroupID: SortOrderSchema.optional(),
  TargetGroupDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const dictTargetGroupsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictTargetGroupsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTargetGroupsOrderByWithRelationInput>;
export const dictTargetGroupsOrderByWithRelationInputObjectZodSchema = makeSchema();
