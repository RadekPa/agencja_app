import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgrRightsOrderByRelationAggregateInputObjectSchema as tblAgrRightsOrderByRelationAggregateInputObjectSchema } from './tblAgrRightsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  PriceTypeID: SortOrderSchema.optional(),
  PriceTypeDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PriceTypePL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictPriceTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictPriceTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeOrderByWithRelationInput>;
export const dictPriceTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
