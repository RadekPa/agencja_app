import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblRoyRatesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblRoyRatesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesOrderByRelationAggregateInput>;
export const tblRoyRatesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
