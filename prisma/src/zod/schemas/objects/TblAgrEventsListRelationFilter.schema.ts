import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsWhereInputObjectSchema as tblAgrEventsWhereInputObjectSchema } from './tblAgrEventsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblAgrEventsWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblAgrEventsWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblAgrEventsWhereInputObjectSchema).optional()
}).strict();
export const TblAgrEventsListRelationFilterObjectSchema: z.ZodType<Prisma.TblAgrEventsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblAgrEventsListRelationFilter>;
export const TblAgrEventsListRelationFilterObjectZodSchema = makeSchema();
