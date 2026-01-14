import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ClientID: SortOrderSchema.optional(),
  Year: SortOrderSchema.optional(),
  PubID: SortOrderSchema.optional()
}).strict();
export const tblCertPubAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCertPubAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCertPubAvgOrderByAggregateInput>;
export const tblCertPubAvgOrderByAggregateInputObjectZodSchema = makeSchema();
