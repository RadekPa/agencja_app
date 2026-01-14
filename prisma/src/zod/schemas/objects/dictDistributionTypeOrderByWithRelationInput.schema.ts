import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblAgrRightsOrderByRelationAggregateInputObjectSchema as tblAgrRightsOrderByRelationAggregateInputObjectSchema } from './tblAgrRightsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  DistID: SortOrderSchema.optional(),
  DistDesc: SortOrderSchema.optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictDistributionTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeOrderByWithRelationInput>;
export const dictDistributionTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
