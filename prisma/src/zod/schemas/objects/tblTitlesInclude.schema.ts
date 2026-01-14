import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsFindManySchema as tblAgreementsFindManySchema } from '../findManytblAgreements.schema';
import { tblSubmissionsFindManySchema as tblSubmissionsFindManySchema } from '../findManytblSubmissions.schema';
import { tblTitAuthorsFindManySchema as tblTitAuthorsFindManySchema } from '../findManytblTitAuthors.schema';
import { tblTitAuxArgsObjectSchema as tblTitAuxArgsObjectSchema } from './tblTitAuxArgs.schema';
import { tblTitEventsFindManySchema as tblTitEventsFindManySchema } from '../findManytblTitEvents.schema';
import { dictLanguagesArgsObjectSchema as dictLanguagesArgsObjectSchema } from './dictLanguagesArgs.schema';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema';
import { dictTitMainClassArgsObjectSchema as dictTitMainClassArgsObjectSchema } from './dictTitMainClassArgs.schema';
import { dictCoverFormatArgsObjectSchema as dictCoverFormatArgsObjectSchema } from './dictCoverFormatArgs.schema';
import { tblTitSubClassFindManySchema as tblTitSubClassFindManySchema } from '../findManytblTitSubClass.schema';
import { TblTitlesCountOutputTypeArgsObjectSchema as TblTitlesCountOutputTypeArgsObjectSchema } from './TblTitlesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsFindManySchema)]).optional(),
  tblSubmissions: z.union([z.boolean(), z.lazy(() => tblSubmissionsFindManySchema)]).optional(),
  tblTitAuthors: z.union([z.boolean(), z.lazy(() => tblTitAuthorsFindManySchema)]).optional(),
  tblTitAux: z.union([z.boolean(), z.lazy(() => tblTitAuxArgsObjectSchema)]).optional(),
  tblTitEvents: z.union([z.boolean(), z.lazy(() => tblTitEventsFindManySchema)]).optional(),
  dictLanguages: z.union([z.boolean(), z.lazy(() => dictLanguagesArgsObjectSchema)]).optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional(),
  dictTitMainClass: z.union([z.boolean(), z.lazy(() => dictTitMainClassArgsObjectSchema)]).optional(),
  dictCoverFormat: z.union([z.boolean(), z.lazy(() => dictCoverFormatArgsObjectSchema)]).optional(),
  tblTitSubClass: z.union([z.boolean(), z.lazy(() => tblTitSubClassFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblTitlesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblTitlesIncludeObjectSchema: z.ZodType<Prisma.tblTitlesInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesInclude>;
export const tblTitlesIncludeObjectZodSchema = makeSchema();
