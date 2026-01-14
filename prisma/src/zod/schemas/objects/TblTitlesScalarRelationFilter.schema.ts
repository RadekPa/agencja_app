import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblTitlesWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => tblTitlesWhereInputObjectSchema).optional()
}).strict();
export const TblTitlesScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblTitlesScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblTitlesScalarRelationFilter>;
export const TblTitlesScalarRelationFilterObjectZodSchema = makeSchema();
