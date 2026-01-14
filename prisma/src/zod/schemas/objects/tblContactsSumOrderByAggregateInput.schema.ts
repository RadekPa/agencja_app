import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ContactID: SortOrderSchema.optional(),
  Informal: SortOrderSchema.optional(),
  Accountant: SortOrderSchema.optional()
}).strict();
export const tblContactsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblContactsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsSumOrderByAggregateInput>;
export const tblContactsSumOrderByAggregateInputObjectZodSchema = makeSchema();
