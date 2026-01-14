import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessWhereInputObjectSchema as tblUserAccessWhereInputObjectSchema } from './tblUserAccessWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblUserAccessWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblUserAccessWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblUserAccessWhereInputObjectSchema).optional()
}).strict();
export const TblUserAccessListRelationFilterObjectSchema: z.ZodType<Prisma.TblUserAccessListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblUserAccessListRelationFilter>;
export const TblUserAccessListRelationFilterObjectZodSchema = makeSchema();
