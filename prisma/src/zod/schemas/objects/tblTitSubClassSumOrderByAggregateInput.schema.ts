import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional()
}).strict();
export const tblTitSubClassSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitSubClassSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassSumOrderByAggregateInput>;
export const tblTitSubClassSumOrderByAggregateInputObjectZodSchema = makeSchema();
