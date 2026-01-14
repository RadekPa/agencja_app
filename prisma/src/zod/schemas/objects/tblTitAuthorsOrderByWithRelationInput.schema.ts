import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAuthorsOrderByWithRelationInputObjectSchema as tblAuthorsOrderByWithRelationInputObjectSchema } from './tblAuthorsOrderByWithRelationInput.schema';
import { tblTitlesOrderByWithRelationInputObjectSchema as tblTitlesOrderByWithRelationInputObjectSchema } from './tblTitlesOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  AuthorID: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  Main: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Lp: SortOrderSchema.optional(),
  tblAuthors: z.lazy(() => tblAuthorsOrderByWithRelationInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblTitAuthorsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsOrderByWithRelationInput>;
export const tblTitAuthorsOrderByWithRelationInputObjectZodSchema = makeSchema();
