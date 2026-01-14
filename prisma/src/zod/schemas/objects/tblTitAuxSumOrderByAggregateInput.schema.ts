import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional()
}).strict();
export const tblTitAuxSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitAuxSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxSumOrderByAggregateInput>;
export const tblTitAuxSumOrderByAggregateInputObjectZodSchema = makeSchema();
