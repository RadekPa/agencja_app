import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserParamsWhereInputObjectSchema as tblUserParamsWhereInputObjectSchema } from './tblUserParamsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblUserParamsWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblUserParamsWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblUserParamsWhereInputObjectSchema).optional()
}).strict();
export const TblUserParamsListRelationFilterObjectSchema: z.ZodType<Prisma.TblUserParamsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblUserParamsListRelationFilter>;
export const TblUserParamsListRelationFilterObjectZodSchema = makeSchema();
