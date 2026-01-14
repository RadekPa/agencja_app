import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  MatTypeID: SortOrderSchema.optional(),
  MatTypeDesc: SortOrderSchema.optional(),
  MatTypeDescPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const dictMatTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictMatTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeOrderByWithRelationInput>;
export const dictMatTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
