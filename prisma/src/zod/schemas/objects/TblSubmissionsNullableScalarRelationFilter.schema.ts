import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereInputObjectSchema as tblSubmissionsWhereInputObjectSchema } from './tblSubmissionsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblSubmissionsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => tblSubmissionsWhereInputObjectSchema).optional().nullable()
}).strict();
export const TblSubmissionsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblSubmissionsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblSubmissionsNullableScalarRelationFilter>;
export const TblSubmissionsNullableScalarRelationFilterObjectZodSchema = makeSchema();
