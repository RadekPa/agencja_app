import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional()
}).strict();
export const TblAgreementsListRelationFilterObjectSchema: z.ZodType<Prisma.TblAgreementsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblAgreementsListRelationFilter>;
export const TblAgreementsListRelationFilterObjectZodSchema = makeSchema();
