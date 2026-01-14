import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsWhereInputObjectSchema as tblAuthorsWhereInputObjectSchema } from './tblAuthorsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblAuthorsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => tblAuthorsWhereInputObjectSchema).optional()
}).strict();
export const TblAuthorsScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblAuthorsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblAuthorsScalarRelationFilter>;
export const TblAuthorsScalarRelationFilterObjectZodSchema = makeSchema();
