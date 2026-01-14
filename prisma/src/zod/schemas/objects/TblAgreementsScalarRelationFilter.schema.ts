import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional()
}).strict();
export const TblAgreementsScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblAgreementsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblAgreementsScalarRelationFilter>;
export const TblAgreementsScalarRelationFilterObjectZodSchema = makeSchema();
