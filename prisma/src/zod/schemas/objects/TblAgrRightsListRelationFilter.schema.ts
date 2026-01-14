import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './tblAgrRightsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional()
}).strict();
export const TblAgrRightsListRelationFilterObjectSchema: z.ZodType<Prisma.TblAgrRightsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblAgrRightsListRelationFilter>;
export const TblAgrRightsListRelationFilterObjectZodSchema = makeSchema();
