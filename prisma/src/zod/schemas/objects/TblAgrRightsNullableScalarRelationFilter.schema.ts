import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './tblAgrRightsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional().nullable()
}).strict();
export const TblAgrRightsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblAgrRightsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblAgrRightsNullableScalarRelationFilter>;
export const TblAgrRightsNullableScalarRelationFilterObjectZodSchema = makeSchema();
