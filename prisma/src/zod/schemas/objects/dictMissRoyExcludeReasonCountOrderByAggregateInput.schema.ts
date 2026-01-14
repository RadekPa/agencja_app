import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: SortOrderSchema.optional(),
  ExcludeReasonCode: SortOrderSchema.optional(),
  ExcludeReasonDesc: SortOrderSchema.optional()
}).strict();
export const dictMissRoyExcludeReasonCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonCountOrderByAggregateInput>;
export const dictMissRoyExcludeReasonCountOrderByAggregateInputObjectZodSchema = makeSchema();
