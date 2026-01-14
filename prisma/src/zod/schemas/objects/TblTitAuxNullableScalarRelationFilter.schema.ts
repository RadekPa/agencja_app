import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuxWhereInputObjectSchema as tblTitAuxWhereInputObjectSchema } from './tblTitAuxWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblTitAuxWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => tblTitAuxWhereInputObjectSchema).optional().nullable()
}).strict();
export const TblTitAuxNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblTitAuxNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblTitAuxNullableScalarRelationFilter>;
export const TblTitAuxNullableScalarRelationFilterObjectZodSchema = makeSchema();
