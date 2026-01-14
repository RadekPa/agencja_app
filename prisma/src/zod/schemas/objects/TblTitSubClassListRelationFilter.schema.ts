import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassWhereInputObjectSchema as tblTitSubClassWhereInputObjectSchema } from './tblTitSubClassWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblTitSubClassWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblTitSubClassWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblTitSubClassWhereInputObjectSchema).optional()
}).strict();
export const TblTitSubClassListRelationFilterObjectSchema: z.ZodType<Prisma.TblTitSubClassListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblTitSubClassListRelationFilter>;
export const TblTitSubClassListRelationFilterObjectZodSchema = makeSchema();
