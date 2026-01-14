import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ContactID: SortOrderSchema.optional(),
  PhoneNumber: SortOrderSchema.optional(),
  FirstName: SortOrderSchema.optional(),
  MiddleName: SortOrderSchema.optional(),
  LastName: SortOrderSchema.optional(),
  Informal: SortOrderSchema.optional(),
  Fax: SortOrderSchema.optional(),
  Email: SortOrderSchema.optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  ContactPosition: SortOrderSchema.optional(),
  Accountant: SortOrderSchema.optional()
}).strict();
export const tblContactsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblContactsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsCountOrderByAggregateInput>;
export const tblContactsCountOrderByAggregateInputObjectZodSchema = makeSchema();
