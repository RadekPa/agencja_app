import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteWhereInputObjectSchema as tblClients_obsoleteWhereInputObjectSchema } from './tblClients_obsoleteWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblClients_obsoleteWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblClients_obsoleteWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblClients_obsoleteWhereInputObjectSchema).optional()
}).strict();
export const TblClients_obsoleteListRelationFilterObjectSchema: z.ZodType<Prisma.TblClients_obsoleteListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblClients_obsoleteListRelationFilter>;
export const TblClients_obsoleteListRelationFilterObjectZodSchema = makeSchema();
