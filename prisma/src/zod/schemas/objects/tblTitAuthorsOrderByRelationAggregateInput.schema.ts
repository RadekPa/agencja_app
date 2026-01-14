import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblTitAuthorsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsOrderByRelationAggregateInput>;
export const tblTitAuthorsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
