import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAdvanceWhereInputObjectSchema as tblAdvanceWhereInputObjectSchema } from './tblAdvanceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblAdvanceWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblAdvanceWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblAdvanceWhereInputObjectSchema).optional()
}).strict();
export const TblAdvanceListRelationFilterObjectSchema: z.ZodType<Prisma.TblAdvanceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblAdvanceListRelationFilter>;
export const TblAdvanceListRelationFilterObjectZodSchema = makeSchema();
