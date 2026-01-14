import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PubLocalID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  Printrun: SortOrderSchema.optional(),
  LocalEdition: SortOrderSchema.optional()
}).strict();
export const tblPubLocalAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPubLocalAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalAvgOrderByAggregateInput>;
export const tblPubLocalAvgOrderByAggregateInputObjectZodSchema = makeSchema();
