import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  FirstName: SortOrderSchema.optional(),
  MiddleName: SortOrderSchema.optional(),
  LastName: SortOrderSchema.optional(),
  CompanyPosition: SortOrderSchema.optional(),
  Birthday: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional(),
  Initials: SortOrderSchema.optional(),
  Phone: SortOrderSchema.optional(),
  MobilePhone: SortOrderSchema.optional(),
  Email: SortOrderSchema.optional(),
  Sex: SortOrderSchema.optional(),
  Street: SortOrderSchema.optional(),
  ZipCode: SortOrderSchema.optional(),
  City: SortOrderSchema.optional(),
  Country: SortOrderSchema.optional(),
  Remarks: SortOrderSchema.optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  Nameday: SortOrderSchema.optional(),
  PersonID: SortOrderSchema.optional()
}).strict();
export const tblUsersMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblUsersMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersMaxOrderByAggregateInput>;
export const tblUsersMaxOrderByAggregateInputObjectZodSchema = makeSchema();
