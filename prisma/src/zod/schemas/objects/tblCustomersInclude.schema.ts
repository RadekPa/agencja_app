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
export const tblCustomersIncludeObjectSchema: z.ZodType<Prisma.tblCustomersInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersInclude>;
export const tblCustomersIncludeObjectZodSchema = makeSchema();
