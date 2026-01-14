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
  TitleID: z.boolean().optional(),
  CustID: z.boolean().optional(),
  PropID: z.boolean().optional(),
  Proprietor: z.boolean().optional(),
  LangAbb: z.boolean().optional(),
  ClassCode: z.boolean().optional(),
  CoverFormatID: z.boolean().optional(),
  Title: z.boolean().optional(),
  ISBN1: z.boolean().optional(),
  ISBN2: z.boolean().optional(),
  ISBN3: z.boolean().optional(),
  ISBN4: z.boolean().optional(),
  SeriesIID: z.boolean().optional(),
  Edition: z.boolean().optional(),
  DateOfReceipt: z.boolean().optional(),
  NoOfPages: z.boolean().optional(),
  CopyrightYear: z.boolean().optional(),
  CopyrightOwner: z.boolean().optional(),
  CopyrightOwnerDesc: z.boolean().optional(),
  KeyWords: z.boolean().optional(),
  TitleVolume: z.boolean().optional(),
  NoOfTitleVolumes: z.boolean().optional(),
  Hit: z.boolean().optional(),
  Junk: z.boolean().optional(),
  CD: z.boolean().optional(),
  Collection: z.boolean().optional(),
  Remarks: z.boolean().optional(),
  UserMod: z.boolean().optional(),
  DateMod: z.boolean().optional(),
  ISBN: z.boolean().optional(),
  PubID: z.boolean().optional(),
  ProprietorDesc: z.boolean().optional(),
  ISBN0: z.boolean().optional(),
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
export const tblTitlesSelectObjectSchema: z.ZodType<Prisma.tblTitlesSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesSelect>;
export const tblTitlesSelectObjectZodSchema = makeSchema();
