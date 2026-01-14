import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional().nullable()
}).strict();
export const TblAgreementsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblAgreementsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblAgreementsNullableScalarRelationFilter>;
export const TblAgreementsNullableScalarRelationFilterObjectZodSchema = makeSchema();
