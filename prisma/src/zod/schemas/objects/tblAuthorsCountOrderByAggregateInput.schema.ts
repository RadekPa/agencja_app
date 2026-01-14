import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AuthorID: SortOrderSchema.optional(),
  FullName: SortOrderSchema.optional(),
  FirstName: SortOrderSchema.optional(),
  MiddleName: SortOrderSchema.optional(),
  LastName: SortOrderSchema.optional(),
  Suffix: SortOrderSchema.optional(),
  PenName: SortOrderSchema.optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  Remarks: SortOrderSchema.optional()
}).strict();
export const tblAuthorsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAuthorsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsCountOrderByAggregateInput>;
export const tblAuthorsCountOrderByAggregateInputObjectZodSchema = makeSchema();
