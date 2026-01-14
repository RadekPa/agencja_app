import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblAgreementsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblAgreementsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsOrderByRelationAggregateInput>;
export const tblAgreementsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
