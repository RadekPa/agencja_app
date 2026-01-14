import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblCustomersWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => tblCustomersWhereInputObjectSchema).optional().nullable()
}).strict();
export const TblCustomersNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblCustomersNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblCustomersNullableScalarRelationFilter>;
export const TblCustomersNullableScalarRelationFilterObjectZodSchema = makeSchema();
