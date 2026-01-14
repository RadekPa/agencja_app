import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesWhereInputObjectSchema as tblCustTypesWhereInputObjectSchema } from './tblCustTypesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblCustTypesWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblCustTypesWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblCustTypesWhereInputObjectSchema).optional()
}).strict();
export const TblCustTypesListRelationFilterObjectSchema: z.ZodType<Prisma.TblCustTypesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblCustTypesListRelationFilter>;
export const TblCustTypesListRelationFilterObjectZodSchema = makeSchema();
