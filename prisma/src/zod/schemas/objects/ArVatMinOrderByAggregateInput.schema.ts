import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  VatCode: SortOrderSchema.optional(),
  Description: SortOrderSchema.optional(),
  VatRate: SortOrderSchema.optional(),
  DescriptionPL: SortOrderSchema.optional()
}).strict();
export const ArVatMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArVatMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArVatMinOrderByAggregateInput>;
export const ArVatMinOrderByAggregateInputObjectZodSchema = makeSchema();
