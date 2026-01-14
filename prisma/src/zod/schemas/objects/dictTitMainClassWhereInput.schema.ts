import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DictTitSubClassListRelationFilterObjectSchema as DictTitSubClassListRelationFilterObjectSchema } from './DictTitSubClassListRelationFilter.schema';
import { TblMailingListsListRelationFilterObjectSchema as TblMailingListsListRelationFilterObjectSchema } from './TblMailingListsListRelationFilter.schema';
import { TblTitlesListRelationFilterObjectSchema as TblTitlesListRelationFilterObjectSchema } from './TblTitlesListRelationFilter.schema'

const dicttitmainclasswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictTitMainClassWhereInputObjectSchema), z.lazy(() => dictTitMainClassWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictTitMainClassWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictTitMainClassWhereInputObjectSchema), z.lazy(() => dictTitMainClassWhereInputObjectSchema).array()]).optional(),
  ClassCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(10)]).optional(),
  ClassDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  dictTitSubClass: z.lazy(() => DictTitSubClassListRelationFilterObjectSchema).optional(),
  tblMailingLists: z.lazy(() => TblMailingListsListRelationFilterObjectSchema).optional(),
  tblTitles: z.lazy(() => TblTitlesListRelationFilterObjectSchema).optional()
}).strict();
export const dictTitMainClassWhereInputObjectSchema: z.ZodType<Prisma.dictTitMainClassWhereInput> = dicttitmainclasswhereinputSchema as unknown as z.ZodType<Prisma.dictTitMainClassWhereInput>;
export const dictTitMainClassWhereInputObjectZodSchema = dicttitmainclasswhereinputSchema;
