import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  PayTypeID: SortOrderSchema.optional(),
  Description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DescriptionPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const lkpPayTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.lkpPayTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.lkpPayTypeOrderByWithRelationInput>;
export const lkpPayTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
