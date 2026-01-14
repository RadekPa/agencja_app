import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const TblCustomersListRelationFilterObjectSchema: z.ZodType<Prisma.TblCustomersListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblCustomersListRelationFilter>;
export const TblCustomersListRelationFilterObjectZodSchema = makeSchema();
