import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional(),
  CopyrightLine: SortOrderSchema.optional()
}).strict();
export const tblTitAuxMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitAuxMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxMaxOrderByAggregateInput>;
export const tblTitAuxMaxOrderByAggregateInputObjectZodSchema = makeSchema();
