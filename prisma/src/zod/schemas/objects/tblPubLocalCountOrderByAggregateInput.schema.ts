import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PubLocalID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  LocalTitle: SortOrderSchema.optional(),
  PubDate: SortOrderSchema.optional(),
  LocalISBN: SortOrderSchema.optional(),
  Printrun: SortOrderSchema.optional(),
  LocalEdition: SortOrderSchema.optional()
}).strict();
export const tblPubLocalCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPubLocalCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalCountOrderByAggregateInput>;
export const tblPubLocalCountOrderByAggregateInputObjectZodSchema = makeSchema();
