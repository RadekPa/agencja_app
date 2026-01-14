import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  MatTypeID: SortOrderSchema.optional(),
  MatTypeDesc: SortOrderSchema.optional(),
  MatTypeDescPL: SortOrderSchema.optional()
}).strict();
export const dictMatTypeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictMatTypeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeCountOrderByAggregateInput>;
export const dictMatTypeCountOrderByAggregateInputObjectZodSchema = makeSchema();
