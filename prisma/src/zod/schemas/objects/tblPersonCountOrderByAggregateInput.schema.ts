import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional(),
  LastName: SortOrderSchema.optional(),
  FirstName: SortOrderSchema.optional(),
  MiddleName: SortOrderSchema.optional(),
  BirthDate: SortOrderSchema.optional(),
  PESEL: SortOrderSchema.optional(),
  Status: SortOrderSchema.optional(),
  Address1: SortOrderSchema.optional(),
  Address2: SortOrderSchema.optional(),
  Zip: SortOrderSchema.optional(),
  City: SortOrderSchema.optional(),
  Country: SortOrderSchema.optional(),
  MobileGRAAL: SortOrderSchema.optional(),
  MobilePrivate: SortOrderSchema.optional(),
  ExtGRAAL: SortOrderSchema.optional(),
  emailGraal: SortOrderSchema.optional(),
  emailPriv: SortOrderSchema.optional()
}).strict();
export const tblPersonCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblPersonCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonCountOrderByAggregateInput>;
export const tblPersonCountOrderByAggregateInputObjectZodSchema = makeSchema();
