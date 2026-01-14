import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblSubmissionsListRelationFilterObjectSchema as TblSubmissionsListRelationFilterObjectSchema } from './TblSubmissionsListRelationFilter.schema'

const dictsubmsenttypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictSubmSentTypeWhereInputObjectSchema), z.lazy(() => dictSubmSentTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictSubmSentTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictSubmSentTypeWhereInputObjectSchema), z.lazy(() => dictSubmSentTypeWhereInputObjectSchema).array()]).optional(),
  SubmSentTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  SubmSentType: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  tblSubmissions: z.lazy(() => TblSubmissionsListRelationFilterObjectSchema).optional()
}).strict();
export const dictSubmSentTypeWhereInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeWhereInput> = dictsubmsenttypewhereinputSchema as unknown as z.ZodType<Prisma.dictSubmSentTypeWhereInput>;
export const dictSubmSentTypeWhereInputObjectZodSchema = dictsubmsenttypewhereinputSchema;
