import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AccountID: SortOrderSchema.optional(),
  AccountDescription: SortOrderSchema.optional()
}).strict();
export const ArAccountOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ArAccountOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountOrderByWithRelationInput>;
export const ArAccountOrderByWithRelationInputObjectZodSchema = makeSchema();
