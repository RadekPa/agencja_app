import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubLocalWhereInputObjectSchema as tblPubLocalWhereInputObjectSchema } from './tblPubLocalWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblPubLocalWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblPubLocalWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblPubLocalWhereInputObjectSchema).optional()
}).strict();
export const TblPubLocalListRelationFilterObjectSchema: z.ZodType<Prisma.TblPubLocalListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblPubLocalListRelationFilter>;
export const TblPubLocalListRelationFilterObjectZodSchema = makeSchema();
