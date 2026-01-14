import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Step: SortOrderSchema.optional(),
  AgrRightID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  CpsMax: SortOrderSchema.optional(),
  Rate: SortOrderSchema.optional()
}).strict();
export const tblRoyRatesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblRoyRatesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesMaxOrderByAggregateInput>;
export const tblRoyRatesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
