import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TempID: SortOrderSchema.optional(),
  TempName: SortOrderSchema.optional(),
  TempPath: SortOrderSchema.optional(),
  TempSubject: SortOrderSchema.optional()
}).strict();
export const tblMailingTemplatesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingTemplatesMaxOrderByAggregateInput>;
export const tblMailingTemplatesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
