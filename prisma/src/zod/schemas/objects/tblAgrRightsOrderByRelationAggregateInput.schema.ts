import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblAgrRightsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblAgrRightsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsOrderByRelationAggregateInput>;
export const tblAgrRightsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
