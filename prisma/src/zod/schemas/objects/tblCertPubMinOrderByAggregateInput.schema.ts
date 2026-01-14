import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ClientID: SortOrderSchema.optional(),
  Year: SortOrderSchema.optional(),
  PubID: SortOrderSchema.optional(),
  DateSent: SortOrderSchema.optional(),
  Original: SortOrderSchema.optional()
}).strict();
export const tblCertPubMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCertPubMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCertPubMinOrderByAggregateInput>;
export const tblCertPubMinOrderByAggregateInputObjectZodSchema = makeSchema();
