import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PlaceID: SortOrderSchema.optional(),
  PlaceDesc: SortOrderSchema.optional()
}).strict();
export const tblPlacesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPlacesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesMaxOrderByAggregateInput>;
export const tblPlacesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
