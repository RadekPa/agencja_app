import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  informal: SortOrderSchema.optional(),
  accountant: SortOrderSchema.optional()
}).strict();
export const ContactAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContactAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactAvgOrderByAggregateInput>;
export const ContactAvgOrderByAggregateInputObjectZodSchema = makeSchema();
