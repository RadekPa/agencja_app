import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsFindManySchema as tblAgreementsFindManySchema } from '../findManytblAgreements.schema';
import { tblClients_obsoleteArgsObjectSchema as tblClients_obsoleteArgsObjectSchema } from './tblClients_obsoleteArgs.schema';
import { tblCustBankArgsObjectSchema as tblCustBankArgsObjectSchema } from './tblCustBankArgs.schema';
import { tblCustContactsFindManySchema as tblCustContactsFindManySchema } from '../findManytblCustContacts.schema';
import { dictLanguagesArgsObjectSchema as dictLanguagesArgsObjectSchema } from './dictLanguagesArgs.schema';
import { dictStatesArgsObjectSchema as dictStatesArgsObjectSchema } from './dictStatesArgs.schema';
import { tblCustTypesFindManySchema as tblCustTypesFindManySchema } from '../findManytblCustTypes.schema';
import { tblCustUsersFindManySchema as tblCustUsersFindManySchema } from '../findManytblCustUsers.schema';
import { tblMailingListsFindManySchema as tblMailingListsFindManySchema } from '../findManytblMailingLists.schema';
import { tblSeriesFindManySchema as tblSeriesFindManySchema } from '../findManytblSeries.schema';
import { tblSubmissionsFindManySchema as tblSubmissionsFindManySchema } from '../findManytblSubmissions.schema';
import { tblTitlesFindManySchema as tblTitlesFindManySchema } from '../findManytblTitles.schema';
import { TblCustomersCountOutputTypeArgsObjectSchema as TblCustomersCountOutputTypeArgsObjectSchema } from './TblCustomersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  CustID: z.boolean().optional(),
  CustAbb: z.boolean().optional(),
  Account: z.boolean().optional(),
  CountryID: z.boolean().optional(),
  Name: z.boolean().optional(),
  Address1: z.boolean().optional(),
  Address2: z.boolean().optional(),
  City: z.boolean().optional(),
  Zip: z.boolean().optional(),
  StateAbb: z.boolean().optional(),
  DefaultPhone: z.boolean().optional(),
  DefaultFax: z.boolean().optional(),
  DefaultEmail: z.boolean().optional(),
  DefaultWWW: z.boolean().optional(),
  ParentCustID: z.boolean().optional(),
  LangAbb: z.boolean().optional(),
  Remarks: z.boolean().optional(),
  DateMod: z.boolean().optional(),
  UserMod: z.boolean().optional(),
  TaxID: z.boolean().optional(),
  VATID: z.boolean().optional(),
  RepModeID: z.boolean().optional(),
  GraalID: z.boolean().optional(),
  Commission: z.boolean().optional(),
  DefAgrDoc: z.boolean().optional(),
  Jurisdiction: z.boolean().optional(),
  CommissionForeign: z.boolean().optional(),
  CommissionMaterials: z.boolean().optional(),
  Status: z.boolean().optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsFindManySchema)]).optional(),
  tblClients_obsolete: z.union([z.boolean(), z.lazy(() => tblClients_obsoleteArgsObjectSchema)]).optional(),
  tblCustBank: z.union([z.boolean(), z.lazy(() => tblCustBankArgsObjectSchema)]).optional(),
  tblCustContacts: z.union([z.boolean(), z.lazy(() => tblCustContactsFindManySchema)]).optional(),
  dictLanguages: z.union([z.boolean(), z.lazy(() => dictLanguagesArgsObjectSchema)]).optional(),
  dictStates: z.union([z.boolean(), z.lazy(() => dictStatesArgsObjectSchema)]).optional(),
  tblCustTypes: z.union([z.boolean(), z.lazy(() => tblCustTypesFindManySchema)]).optional(),
  tblCustUsers: z.union([z.boolean(), z.lazy(() => tblCustUsersFindManySchema)]).optional(),
  tblMailingLists: z.union([z.boolean(), z.lazy(() => tblMailingListsFindManySchema)]).optional(),
  tblSeries: z.union([z.boolean(), z.lazy(() => tblSeriesFindManySchema)]).optional(),
  tblSubmissions: z.union([z.boolean(), z.lazy(() => tblSubmissionsFindManySchema)]).optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblCustomersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblCustomersSelectObjectSchema: z.ZodType<Prisma.tblCustomersSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersSelect>;
export const tblCustomersSelectObjectZodSchema = makeSchema();
