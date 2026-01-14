import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereInputObjectSchema as tblSubmissionsWhereInputObjectSchema } from './tblSubmissionsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblSubmissionsWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblSubmissionsWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblSubmissionsWhereInputObjectSchema).optional()
}).strict();
export const TblSubmissionsListRelationFilterObjectSchema: z.ZodType<Prisma.TblSubmissionsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblSubmissionsListRelationFilter>;
export const TblSubmissionsListRelationFilterObjectZodSchema = makeSchema();
