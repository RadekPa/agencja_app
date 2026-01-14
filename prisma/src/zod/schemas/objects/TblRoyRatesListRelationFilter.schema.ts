import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesWhereInputObjectSchema as tblRoyRatesWhereInputObjectSchema } from './tblRoyRatesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblRoyRatesWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblRoyRatesWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblRoyRatesWhereInputObjectSchema).optional()
}).strict();
export const TblRoyRatesListRelationFilterObjectSchema: z.ZodType<Prisma.TblRoyRatesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblRoyRatesListRelationFilter>;
export const TblRoyRatesListRelationFilterObjectZodSchema = makeSchema();
