import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  MatID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  MatTypeID: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional()
}).strict();
export const tblMaterialSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblMaterialSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMaterialSumOrderByAggregateInput>;
export const tblMaterialSumOrderByAggregateInputObjectZodSchema = makeSchema();
