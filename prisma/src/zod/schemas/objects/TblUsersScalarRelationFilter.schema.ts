import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './tblUsersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblUsersWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => tblUsersWhereInputObjectSchema).optional()
}).strict();
export const TblUsersScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblUsersScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblUsersScalarRelationFilter>;
export const TblUsersScalarRelationFilterObjectZodSchema = makeSchema();
