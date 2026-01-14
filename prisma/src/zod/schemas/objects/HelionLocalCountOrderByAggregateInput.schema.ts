import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ISBNORG: SortOrderSchema.optional(),
  ISBNHELION: SortOrderSchema.optional(),
  TYTULORG: SortOrderSchema.optional(),
  TYTULHELION: SortOrderSchema.optional()
}).strict();
export const HelionLocalCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HelionLocalCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HelionLocalCountOrderByAggregateInput>;
export const HelionLocalCountOrderByAggregateInputObjectZodSchema = makeSchema();
