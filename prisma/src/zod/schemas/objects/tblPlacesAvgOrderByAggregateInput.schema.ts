import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PlaceID: SortOrderSchema.optional()
}).strict();
export const tblPlacesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPlacesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesAvgOrderByAggregateInput>;
export const tblPlacesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
