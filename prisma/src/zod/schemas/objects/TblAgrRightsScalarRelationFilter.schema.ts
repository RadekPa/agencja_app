import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './tblAgrRightsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional()
}).strict();
export const TblAgrRightsScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblAgrRightsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblAgrRightsScalarRelationFilter>;
export const TblAgrRightsScalarRelationFilterObjectZodSchema = makeSchema();
