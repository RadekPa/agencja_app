import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblAgrRightsListRelationFilterObjectSchema as TblAgrRightsListRelationFilterObjectSchema } from './TblAgrRightsListRelationFilter.schema'

const dictrightsformwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRightsFormWhereInputObjectSchema), z.lazy(() => dictRightsFormWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRightsFormWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRightsFormWhereInputObjectSchema), z.lazy(() => dictRightsFormWhereInputObjectSchema).array()]).optional(),
  RightFormID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  RightFormDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  RightFormPL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  RightFormAbbPL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  RightFormAbbEN: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  tblAgrRights: z.lazy(() => TblAgrRightsListRelationFilterObjectSchema).optional()
}).strict();
export const dictRightsFormWhereInputObjectSchema: z.ZodType<Prisma.dictRightsFormWhereInput> = dictrightsformwhereinputSchema as unknown as z.ZodType<Prisma.dictRightsFormWhereInput>;
export const dictRightsFormWhereInputObjectZodSchema = dictrightsformwhereinputSchema;
