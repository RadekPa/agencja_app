import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesFindManySchema as dictArticlesFindManySchema } from '../findManydictArticles.schema';
import { tblAgreementsFindManySchema as tblAgreementsFindManySchema } from '../findManytblAgreements.schema';
import { tblCustomersFindManySchema as tblCustomersFindManySchema } from '../findManytblCustomers.schema';
import { tblTitlesFindManySchema as tblTitlesFindManySchema } from '../findManytblTitles.schema';
import { DictLanguagesCountOutputTypeArgsObjectSchema as DictLanguagesCountOutputTypeArgsObjectSchema } from './DictLanguagesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  dictArticles: z.union([z.boolean(), z.lazy(() => dictArticlesFindManySchema)]).optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsFindManySchema)]).optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersFindManySchema)]).optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictLanguagesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictLanguagesIncludeObjectSchema: z.ZodType<Prisma.dictLanguagesInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesInclude>;
export const dictLanguagesIncludeObjectZodSchema = makeSchema();
