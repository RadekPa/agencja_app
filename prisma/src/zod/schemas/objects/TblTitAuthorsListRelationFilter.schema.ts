import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsWhereInputObjectSchema as tblTitAuthorsWhereInputObjectSchema } from './tblTitAuthorsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblTitAuthorsWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblTitAuthorsWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblTitAuthorsWhereInputObjectSchema).optional()
}).strict();
export const TblTitAuthorsListRelationFilterObjectSchema: z.ZodType<Prisma.TblTitAuthorsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblTitAuthorsListRelationFilter>;
export const TblTitAuthorsListRelationFilterObjectZodSchema = makeSchema();
