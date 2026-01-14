import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblTitlesWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblTitlesWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblTitlesWhereInputObjectSchema).optional()
}).strict();
export const TblTitlesListRelationFilterObjectSchema: z.ZodType<Prisma.TblTitlesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblTitlesListRelationFilter>;
export const TblTitlesListRelationFilterObjectZodSchema = makeSchema();
