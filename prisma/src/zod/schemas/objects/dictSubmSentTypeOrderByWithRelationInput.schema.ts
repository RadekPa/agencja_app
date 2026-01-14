import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblSubmissionsOrderByRelationAggregateInputObjectSchema as tblSubmissionsOrderByRelationAggregateInputObjectSchema } from './tblSubmissionsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: SortOrderSchema.optional(),
  SubmSentType: SortOrderSchema.optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictSubmSentTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeOrderByWithRelationInput>;
export const dictSubmSentTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
