import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TempID: SortOrderSchema.optional()
}).strict();
export const tblMailingTemplatesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingTemplatesAvgOrderByAggregateInput>;
export const tblMailingTemplatesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
