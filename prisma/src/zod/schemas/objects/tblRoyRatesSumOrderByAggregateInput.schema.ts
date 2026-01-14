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
export const tblRoyRatesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblRoyRatesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesSumOrderByAggregateInput>;
export const tblRoyRatesSumOrderByAggregateInputObjectZodSchema = makeSchema();
