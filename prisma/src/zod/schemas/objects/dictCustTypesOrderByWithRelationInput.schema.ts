import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCustTypesOrderByRelationAggregateInputObjectSchema as tblCustTypesOrderByRelationAggregateInputObjectSchema } from './tblCustTypesOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  CustTypeID: SortOrderSchema.optional(),
  CustTypeName: SortOrderSchema.optional(),
  CustTypeDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblCustTypes: z.lazy(() => tblCustTypesOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictCustTypesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictCustTypesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesOrderByWithRelationInput>;
export const dictCustTypesOrderByWithRelationInputObjectZodSchema = makeSchema();
