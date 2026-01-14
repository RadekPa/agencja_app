import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsWhereInputObjectSchema as tblSubmEventsWhereInputObjectSchema } from './tblSubmEventsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblSubmEventsWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblSubmEventsWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblSubmEventsWhereInputObjectSchema).optional()
}).strict();
export const TblSubmEventsListRelationFilterObjectSchema: z.ZodType<Prisma.TblSubmEventsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblSubmEventsListRelationFilter>;
export const TblSubmEventsListRelationFilterObjectZodSchema = makeSchema();
