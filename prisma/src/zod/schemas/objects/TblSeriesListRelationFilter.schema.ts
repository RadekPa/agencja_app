import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSeriesWhereInputObjectSchema as tblSeriesWhereInputObjectSchema } from './tblSeriesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblSeriesWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblSeriesWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblSeriesWhereInputObjectSchema).optional()
}).strict();
export const TblSeriesListRelationFilterObjectSchema: z.ZodType<Prisma.TblSeriesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblSeriesListRelationFilter>;
export const TblSeriesListRelationFilterObjectZodSchema = makeSchema();
