import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  VatCode: SortOrderSchema.optional(),
  Description: SortOrderSchema.optional(),
  VatRate: SortOrderSchema.optional(),
  DescriptionPL: SortOrderSchema.optional()
}).strict();
export const ArVatMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArVatMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArVatMaxOrderByAggregateInput>;
export const ArVatMaxOrderByAggregateInputObjectZodSchema = makeSchema();
