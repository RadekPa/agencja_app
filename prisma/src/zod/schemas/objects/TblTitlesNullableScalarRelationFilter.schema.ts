import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblTitlesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => tblTitlesWhereInputObjectSchema).optional().nullable()
}).strict();
export const TblTitlesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblTitlesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblTitlesNullableScalarRelationFilter>;
export const TblTitlesNullableScalarRelationFilterObjectZodSchema = makeSchema();
