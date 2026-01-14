import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CurrDate: SortOrderSchema.optional(),
  CurrID: SortOrderSchema.optional(),
  XRate: SortOrderSchema.optional()
}).strict();
export const dictXRatesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictXRatesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesOrderByWithRelationInput>;
export const dictXRatesOrderByWithRelationInputObjectZodSchema = makeSchema();
