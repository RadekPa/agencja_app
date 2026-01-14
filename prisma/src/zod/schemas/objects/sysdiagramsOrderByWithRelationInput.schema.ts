import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  name: SortOrderSchema.optional(),
  principal_id: SortOrderSchema.optional(),
  diagram_id: SortOrderSchema.optional(),
  version: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  definition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const sysdiagramsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.sysdiagramsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsOrderByWithRelationInput>;
export const sysdiagramsOrderByWithRelationInputObjectZodSchema = makeSchema();
