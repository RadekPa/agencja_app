import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblSubmissionsListRelationFilterObjectSchema as TblSubmissionsListRelationFilterObjectSchema } from './TblSubmissionsListRelationFilter.schema';
import { TblTitEventsListRelationFilterObjectSchema as TblTitEventsListRelationFilterObjectSchema } from './TblTitEventsListRelationFilter.schema'

const dictcopytypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCopyTypeWhereInputObjectSchema), z.lazy(() => dictCopyTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCopyTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCopyTypeWhereInputObjectSchema), z.lazy(() => dictCopyTypeWhereInputObjectSchema).array()]).optional(),
  CopyTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CopyType: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  tblSubmissions: z.lazy(() => TblSubmissionsListRelationFilterObjectSchema).optional(),
  tblTitEvents: z.lazy(() => TblTitEventsListRelationFilterObjectSchema).optional()
}).strict();
export const dictCopyTypeWhereInputObjectSchema: z.ZodType<Prisma.dictCopyTypeWhereInput> = dictcopytypewhereinputSchema as unknown as z.ZodType<Prisma.dictCopyTypeWhereInput>;
export const dictCopyTypeWhereInputObjectZodSchema = dictcopytypewhereinputSchema;
