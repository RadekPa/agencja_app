import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DictArticlesListRelationFilterObjectSchema as DictArticlesListRelationFilterObjectSchema } from './DictArticlesListRelationFilter.schema';
import { TblAgreementsListRelationFilterObjectSchema as TblAgreementsListRelationFilterObjectSchema } from './TblAgreementsListRelationFilter.schema';
import { TblCustomersListRelationFilterObjectSchema as TblCustomersListRelationFilterObjectSchema } from './TblCustomersListRelationFilter.schema';
import { TblTitlesListRelationFilterObjectSchema as TblTitlesListRelationFilterObjectSchema } from './TblTitlesListRelationFilter.schema'

const dictlanguageswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictLanguagesWhereInputObjectSchema), z.lazy(() => dictLanguagesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictLanguagesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictLanguagesWhereInputObjectSchema), z.lazy(() => dictLanguagesWhereInputObjectSchema).array()]).optional(),
  LangAbb: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(3)]).optional(),
  LangDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  LangPL: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  dictArticles: z.lazy(() => DictArticlesListRelationFilterObjectSchema).optional(),
  tblAgreements: z.lazy(() => TblAgreementsListRelationFilterObjectSchema).optional(),
  tblCustomers: z.lazy(() => TblCustomersListRelationFilterObjectSchema).optional(),
  tblTitles: z.lazy(() => TblTitlesListRelationFilterObjectSchema).optional()
}).strict();
export const dictLanguagesWhereInputObjectSchema: z.ZodType<Prisma.dictLanguagesWhereInput> = dictlanguageswhereinputSchema as unknown as z.ZodType<Prisma.dictLanguagesWhereInput>;
export const dictLanguagesWhereInputObjectZodSchema = dictlanguageswhereinputSchema;
