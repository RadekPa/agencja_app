import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblContactsWhereInputObjectSchema as tblContactsWhereInputObjectSchema } from './tblContactsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblContactsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => tblContactsWhereInputObjectSchema).optional()
}).strict();
export const TblContactsScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblContactsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblContactsScalarRelationFilter>;
export const TblContactsScalarRelationFilterObjectZodSchema = makeSchema();
