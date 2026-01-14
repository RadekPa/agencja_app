import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgrRightsOrderByRelationAggregateInputObjectSchema as tblAgrRightsOrderByRelationAggregateInputObjectSchema } from './tblAgrRightsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: SortOrderSchema.optional(),
  RoyPriceTypeDesc: SortOrderSchema.optional(),
  RoyPriceTypePL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictRoyPriceTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeOrderByWithRelationInput>;
export const dictRoyPriceTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
