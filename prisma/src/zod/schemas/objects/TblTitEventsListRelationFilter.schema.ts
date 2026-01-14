import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsWhereInputObjectSchema as tblTitEventsWhereInputObjectSchema } from './tblTitEventsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblTitEventsWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblTitEventsWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblTitEventsWhereInputObjectSchema).optional()
}).strict();
export const TblTitEventsListRelationFilterObjectSchema: z.ZodType<Prisma.TblTitEventsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblTitEventsListRelationFilter>;
export const TblTitEventsListRelationFilterObjectZodSchema = makeSchema();
