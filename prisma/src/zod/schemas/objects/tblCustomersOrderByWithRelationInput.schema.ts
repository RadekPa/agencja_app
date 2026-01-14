import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgreementsOrderByRelationAggregateInputObjectSchema as tblAgreementsOrderByRelationAggregateInputObjectSchema } from './tblAgreementsOrderByRelationAggregateInput.schema';
import { tblClients_obsoleteOrderByWithRelationInputObjectSchema as tblClients_obsoleteOrderByWithRelationInputObjectSchema } from './tblClients_obsoleteOrderByWithRelationInput.schema';
import { tblCustBankOrderByWithRelationInputObjectSchema as tblCustBankOrderByWithRelationInputObjectSchema } from './tblCustBankOrderByWithRelationInput.schema';
import { tblCustContactsOrderByRelationAggregateInputObjectSchema as tblCustContactsOrderByRelationAggregateInputObjectSchema } from './tblCustContactsOrderByRelationAggregateInput.schema';
import { dictLanguagesOrderByWithRelationInputObjectSchema as dictLanguagesOrderByWithRelationInputObjectSchema } from './dictLanguagesOrderByWithRelationInput.schema';
import { dictStatesOrderByWithRelationInputObjectSchema as dictStatesOrderByWithRelationInputObjectSchema } from './dictStatesOrderByWithRelationInput.schema';
import { tblCustTypesOrderByRelationAggregateInputObjectSchema as tblCustTypesOrderByRelationAggregateInputObjectSchema } from './tblCustTypesOrderByRelationAggregateInput.schema';
import { tblCustUsersOrderByRelationAggregateInputObjectSchema as tblCustUsersOrderByRelationAggregateInputObjectSchema } from './tblCustUsersOrderByRelationAggregateInput.schema';
import { tblMailingListsOrderByRelationAggregateInputObjectSchema as tblMailingListsOrderByRelationAggregateInputObjectSchema } from './tblMailingListsOrderByRelationAggregateInput.schema';
import { tblSeriesOrderByRelationAggregateInputObjectSchema as tblSeriesOrderByRelationAggregateInputObjectSchema } from './tblSeriesOrderByRelationAggregateInput.schema';
import { tblSubmissionsOrderByRelationAggregateInputObjectSchema as tblSubmissionsOrderByRelationAggregateInputObjectSchema } from './tblSubmissionsOrderByRelationAggregateInput.schema';
import { tblTitlesOrderByRelationAggregateInputObjectSchema as tblTitlesOrderByRelationAggregateInputObjectSchema } from './tblTitlesOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  CustAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Account: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CountryID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Address1: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Address2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  City: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Zip: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  StateAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefaultPhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefaultFax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefaultEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefaultWWW: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ParentCustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LangAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  VATID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RepModeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Commission: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefAgrDoc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Jurisdiction: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CommissionForeign: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CommissionMaterials: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByRelationAggregateInputObjectSchema).optional(),
  tblClients_obsolete: z.lazy(() => tblClients_obsoleteOrderByWithRelationInputObjectSchema).optional(),
  tblCustBank: z.lazy(() => tblCustBankOrderByWithRelationInputObjectSchema).optional(),
  tblCustContacts: z.lazy(() => tblCustContactsOrderByRelationAggregateInputObjectSchema).optional(),
  dictLanguages: z.lazy(() => dictLanguagesOrderByWithRelationInputObjectSchema).optional(),
  dictStates: z.lazy(() => dictStatesOrderByWithRelationInputObjectSchema).optional(),
  tblCustTypes: z.lazy(() => tblCustTypesOrderByRelationAggregateInputObjectSchema).optional(),
  tblCustUsers: z.lazy(() => tblCustUsersOrderByRelationAggregateInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsOrderByRelationAggregateInputObjectSchema).optional(),
  tblSeries: z.lazy(() => tblSeriesOrderByRelationAggregateInputObjectSchema).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsOrderByRelationAggregateInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const tblCustomersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblCustomersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersOrderByWithRelationInput>;
export const tblCustomersOrderByWithRelationInputObjectZodSchema = makeSchema();
