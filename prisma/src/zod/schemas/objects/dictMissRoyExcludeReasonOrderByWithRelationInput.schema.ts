import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: SortOrderSchema.optional(),
  ExcludeReasonCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ExcludeReasonDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const dictMissRoyExcludeReasonOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonOrderByWithRelationInput>;
export const dictMissRoyExcludeReasonOrderByWithRelationInputObjectZodSchema = makeSchema();
