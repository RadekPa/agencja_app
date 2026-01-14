import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: SortOrderSchema.optional(),
  ExcludeReasonCode: SortOrderSchema.optional(),
  ExcludeReasonDesc: SortOrderSchema.optional()
}).strict();
export const dictMissRoyExcludeReasonMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonMaxOrderByAggregateInput>;
export const dictMissRoyExcludeReasonMaxOrderByAggregateInputObjectZodSchema = makeSchema();
