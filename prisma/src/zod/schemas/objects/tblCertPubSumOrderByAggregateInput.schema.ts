import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ClientID: SortOrderSchema.optional(),
  Year: SortOrderSchema.optional(),
  PubID: SortOrderSchema.optional()
}).strict();
export const tblCertPubSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCertPubSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCertPubSumOrderByAggregateInput>;
export const tblCertPubSumOrderByAggregateInputObjectZodSchema = makeSchema();
