import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional()
}).strict();
export const tblTitSubClassAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitSubClassAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassAvgOrderByAggregateInput>;
export const tblTitSubClassAvgOrderByAggregateInputObjectZodSchema = makeSchema();
