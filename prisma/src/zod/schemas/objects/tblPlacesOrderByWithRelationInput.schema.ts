import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblUserAccessOrderByRelationAggregateInputObjectSchema as tblUserAccessOrderByRelationAggregateInputObjectSchema } from './tblUserAccessOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  PlaceID: SortOrderSchema.optional(),
  PlaceDesc: SortOrderSchema.optional(),
  tblUserAccess: z.lazy(() => tblUserAccessOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const tblPlacesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblPlacesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesOrderByWithRelationInput>;
export const tblPlacesOrderByWithRelationInputObjectZodSchema = makeSchema();
