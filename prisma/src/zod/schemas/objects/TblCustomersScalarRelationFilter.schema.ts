import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const TblCustomersScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblCustomersScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblCustomersScalarRelationFilter>;
export const TblCustomersScalarRelationFilterObjectZodSchema = makeSchema();
