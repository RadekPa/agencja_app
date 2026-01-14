import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ISBNORG: SortOrderSchema.optional(),
  ISBNHELION: SortOrderSchema.optional(),
  TYTULORG: SortOrderSchema.optional(),
  TYTULHELION: SortOrderSchema.optional()
}).strict();
export const HelionLocalMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HelionLocalMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HelionLocalMaxOrderByAggregateInput>;
export const HelionLocalMaxOrderByAggregateInputObjectZodSchema = makeSchema();
