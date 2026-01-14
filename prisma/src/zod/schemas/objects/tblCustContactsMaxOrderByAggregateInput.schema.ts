import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ContactID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  DefaultContact: SortOrderSchema.optional(),
  TypeOfContact: SortOrderSchema.optional(),
  Phone: SortOrderSchema.optional(),
  CellPhone: SortOrderSchema.optional(),
  Fax: SortOrderSchema.optional(),
  Email: SortOrderSchema.optional(),
  IsSameAsClient: SortOrderSchema.optional()
}).strict();
export const tblCustContactsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblCustContactsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsMaxOrderByAggregateInput>;
export const tblCustContactsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
