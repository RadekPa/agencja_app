import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblTitlesOrderByRelationAggregateInputObjectSchema as tblTitlesOrderByRelationAggregateInputObjectSchema } from './tblTitlesOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  CoverFormatID: SortOrderSchema.optional(),
  CoverFormatDesc: SortOrderSchema.optional(),
  tblTitles: z.lazy(() => tblTitlesOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictCoverFormatOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictCoverFormatOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatOrderByWithRelationInput>;
export const dictCoverFormatOrderByWithRelationInputObjectZodSchema = makeSchema();
