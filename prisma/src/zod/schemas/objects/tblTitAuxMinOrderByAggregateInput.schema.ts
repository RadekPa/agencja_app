import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional(),
  CopyrightLine: SortOrderSchema.optional()
}).strict();
export const tblTitAuxMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitAuxMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxMinOrderByAggregateInput>;
export const tblTitAuxMinOrderByAggregateInputObjectZodSchema = makeSchema();
