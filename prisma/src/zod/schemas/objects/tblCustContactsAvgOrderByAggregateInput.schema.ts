import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ContactID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  DefaultContact: SortOrderSchema.optional(),
  TypeOfContact: SortOrderSchema.optional()
}).strict();
export const tblCustContactsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustContactsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsAvgOrderByAggregateInput>;
export const tblCustContactsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
