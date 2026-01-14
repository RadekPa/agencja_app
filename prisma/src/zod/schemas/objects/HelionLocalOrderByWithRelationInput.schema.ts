import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  ISBNORG: SortOrderSchema.optional(),
  ISBNHELION: SortOrderSchema.optional(),
  TYTULORG: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TYTULHELION: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const HelionLocalOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.HelionLocalOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.HelionLocalOrderByWithRelationInput>;
export const HelionLocalOrderByWithRelationInputObjectZodSchema = makeSchema();
