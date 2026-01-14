import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  MatID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  MatTypeID: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional()
}).strict();
export const tblMaterialAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblMaterialAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMaterialAvgOrderByAggregateInput>;
export const tblMaterialAvgOrderByAggregateInputObjectZodSchema = makeSchema();
