import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  AdvTypeId: SortOrderSchema.optional(),
  AdvTypeDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvTypeDescPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const dictAdvTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictAdvTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeOrderByWithRelationInput>;
export const dictAdvTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
