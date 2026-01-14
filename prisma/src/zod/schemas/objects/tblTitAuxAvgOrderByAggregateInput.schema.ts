import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional()
}).strict();
export const tblTitAuxAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitAuxAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxAvgOrderByAggregateInput>;
export const tblTitAuxAvgOrderByAggregateInputObjectZodSchema = makeSchema();
