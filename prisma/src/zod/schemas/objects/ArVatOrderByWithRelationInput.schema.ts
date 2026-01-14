import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  VatCode: SortOrderSchema.optional(),
  Description: SortOrderSchema.optional(),
  VatRate: SortOrderSchema.optional(),
  DescriptionPL: SortOrderSchema.optional()
}).strict();
export const ArVatOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ArVatOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArVatOrderByWithRelationInput>;
export const ArVatOrderByWithRelationInputObjectZodSchema = makeSchema();
