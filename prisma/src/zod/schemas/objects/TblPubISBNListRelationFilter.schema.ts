import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNWhereInputObjectSchema as tblPubISBNWhereInputObjectSchema } from './tblPubISBNWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblPubISBNWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblPubISBNWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblPubISBNWhereInputObjectSchema).optional()
}).strict();
export const TblPubISBNListRelationFilterObjectSchema: z.ZodType<Prisma.TblPubISBNListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblPubISBNListRelationFilter>;
export const TblPubISBNListRelationFilterObjectZodSchema = makeSchema();
