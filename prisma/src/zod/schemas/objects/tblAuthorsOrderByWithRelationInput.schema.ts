import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblTitAuthorsOrderByRelationAggregateInputObjectSchema as tblTitAuthorsOrderByRelationAggregateInputObjectSchema } from './tblTitAuthorsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  AuthorID: SortOrderSchema.optional(),
  FullName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  FirstName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MiddleName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LastName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Suffix: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PenName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblTitAuthors: z.lazy(() => tblTitAuthorsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const tblAuthorsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblAuthorsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsOrderByWithRelationInput>;
export const tblAuthorsOrderByWithRelationInputObjectZodSchema = makeSchema();
