import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteWhereInputObjectSchema as tblClients_obsoleteWhereInputObjectSchema } from './tblClients_obsoleteWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblClients_obsoleteWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => tblClients_obsoleteWhereInputObjectSchema).optional().nullable()
}).strict();
export const TblClients_obsoleteNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblClients_obsoleteNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblClients_obsoleteNullableScalarRelationFilter>;
export const TblClients_obsoleteNullableScalarRelationFilterObjectZodSchema = makeSchema();
