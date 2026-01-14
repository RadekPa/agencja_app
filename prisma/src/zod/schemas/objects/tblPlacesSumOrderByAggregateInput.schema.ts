import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PlaceID: SortOrderSchema.optional()
}).strict();
export const tblPlacesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPlacesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesSumOrderByAggregateInput>;
export const tblPlacesSumOrderByAggregateInputObjectZodSchema = makeSchema();
