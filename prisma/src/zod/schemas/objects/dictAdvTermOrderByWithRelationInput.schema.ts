import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  AdvTermId: SortOrderSchema.optional(),
  AdvTermDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvTermPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const dictAdvTermOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictAdvTermOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermOrderByWithRelationInput>;
export const dictAdvTermOrderByWithRelationInputObjectZodSchema = makeSchema();
