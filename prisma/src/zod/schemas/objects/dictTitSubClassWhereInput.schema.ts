import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DictTitMainClassNullableScalarRelationFilterObjectSchema as DictTitMainClassNullableScalarRelationFilterObjectSchema } from './DictTitMainClassNullableScalarRelationFilter.schema';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema';
import { TblMailingListsListRelationFilterObjectSchema as TblMailingListsListRelationFilterObjectSchema } from './TblMailingListsListRelationFilter.schema';
import { TblTitSubClassListRelationFilterObjectSchema as TblTitSubClassListRelationFilterObjectSchema } from './TblTitSubClassListRelationFilter.schema'

const dicttitsubclasswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictTitSubClassWhereInputObjectSchema), z.lazy(() => dictTitSubClassWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictTitSubClassWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictTitSubClassWhereInputObjectSchema), z.lazy(() => dictTitSubClassWhereInputObjectSchema).array()]).optional(),
  SubClassCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(5)]).optional(),
  ClassCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  SubClassDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  dictTitMainClass: z.union([z.lazy(() => DictTitMainClassNullableScalarRelationFilterObjectSchema), z.lazy(() => dictTitMainClassWhereInputObjectSchema)]).optional(),
  tblMailingLists: z.lazy(() => TblMailingListsListRelationFilterObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => TblTitSubClassListRelationFilterObjectSchema).optional()
}).strict();
export const dictTitSubClassWhereInputObjectSchema: z.ZodType<Prisma.dictTitSubClassWhereInput> = dicttitsubclasswhereinputSchema as unknown as z.ZodType<Prisma.dictTitSubClassWhereInput>;
export const dictTitSubClassWhereInputObjectZodSchema = dicttitsubclasswhereinputSchema;
