import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblSubmEventsListRelationFilterObjectSchema as TblSubmEventsListRelationFilterObjectSchema } from './TblSubmEventsListRelationFilter.schema';
import { TblTitEventsListRelationFilterObjectSchema as TblTitEventsListRelationFilterObjectSchema } from './TblTitEventsListRelationFilter.schema'

const dicteventswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictEventsWhereInputObjectSchema), z.lazy(() => dictEventsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictEventsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictEventsWhereInputObjectSchema), z.lazy(() => dictEventsWhereInputObjectSchema).array()]).optional(),
  EventCode: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  EventDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  tblSubmEvents: z.lazy(() => TblSubmEventsListRelationFilterObjectSchema).optional(),
  tblTitEvents: z.lazy(() => TblTitEventsListRelationFilterObjectSchema).optional()
}).strict();
export const dictEventsWhereInputObjectSchema: z.ZodType<Prisma.dictEventsWhereInput> = dicteventswhereinputSchema as unknown as z.ZodType<Prisma.dictEventsWhereInput>;
export const dictEventsWhereInputObjectZodSchema = dicteventswhereinputSchema;
