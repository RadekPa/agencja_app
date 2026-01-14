import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesWhereInputObjectSchema as tblPlacesWhereInputObjectSchema } from './tblPlacesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblPlacesWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => tblPlacesWhereInputObjectSchema).optional()
}).strict();
export const TblPlacesScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblPlacesScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblPlacesScalarRelationFilter>;
export const TblPlacesScalarRelationFilterObjectZodSchema = makeSchema();
