import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional(),
  CopyrightLine: SortOrderSchema.optional()
}).strict();
export const tblTitAuxCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitAuxCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxCountOrderByAggregateInput>;
export const tblTitAuxCountOrderByAggregateInputObjectZodSchema = makeSchema();
