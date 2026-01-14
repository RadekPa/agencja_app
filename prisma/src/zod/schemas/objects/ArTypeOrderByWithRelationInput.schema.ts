import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  ArType: SortOrderSchema.optional(),
  ArTypeDescription: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ArTypeDescriptionPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const ArTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ArTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeOrderByWithRelationInput>;
export const ArTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
