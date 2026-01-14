import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ContactID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  DefaultContact: SortOrderSchema.optional(),
  TypeOfContact: SortOrderSchema.optional()
}).strict();
export const tblCustContactsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustContactsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsSumOrderByAggregateInput>;
export const tblCustContactsSumOrderByAggregateInputObjectZodSchema = makeSchema();
