import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAdvanceOrderByRelationAggregateInputObjectSchema as tblAdvanceOrderByRelationAggregateInputObjectSchema } from './tblAdvanceOrderByRelationAggregateInput.schema';
import { dictCurrenciesOrderByWithRelationInputObjectSchema as dictCurrenciesOrderByWithRelationInputObjectSchema } from './dictCurrenciesOrderByWithRelationInput.schema';
import { tblTitlesOrderByWithRelationInputObjectSchema as tblTitlesOrderByWithRelationInputObjectSchema } from './tblTitlesOrderByWithRelationInput.schema';
import { dictLanguagesOrderByWithRelationInputObjectSchema as dictLanguagesOrderByWithRelationInputObjectSchema } from './dictLanguagesOrderByWithRelationInput.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './tblCustomersOrderByWithRelationInput.schema';
import { dictCountries_oldOrderByWithRelationInputObjectSchema as dictCountries_oldOrderByWithRelationInputObjectSchema } from './dictCountries_oldOrderByWithRelationInput.schema';
import { tblAgrEventsOrderByRelationAggregateInputObjectSchema as tblAgrEventsOrderByRelationAggregateInputObjectSchema } from './tblAgrEventsOrderByRelationAggregateInput.schema';
import { tblAgrRightsOrderByRelationAggregateInputObjectSchema as tblAgrRightsOrderByRelationAggregateInputObjectSchema } from './tblAgrRightsOrderByRelationAggregateInput.schema';
import { tblPubLocalOrderByRelationAggregateInputObjectSchema as tblPubLocalOrderByRelationAggregateInputObjectSchema } from './tblPubLocalOrderByRelationAggregateInput.schema';
import { tblRoyaltyOrderByRelationAggregateInputObjectSchema as tblRoyaltyOrderByRelationAggregateInputObjectSchema } from './tblRoyaltyOrderByRelationAggregateInput.schema';
import { tblRoyRatesOrderByRelationAggregateInputObjectSchema as tblRoyRatesOrderByRelationAggregateInputObjectSchema } from './tblRoyRatesOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  AgrID: SortOrderSchema.optional(),
  CustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CountryID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LangAbbr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TitleID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CurrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgrDate: SortOrderSchema.optional(),
  ValidYY: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PubTermMM: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MaxNoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  MinNoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Commission: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ClientReference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalAgentID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalShare: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EstimatedCopyPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalRepresent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgrDoc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopiesToOwner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopiesToGraal: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalTitle: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalPubDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ClientID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CommissionMaterials: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgentID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PropID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAdvance: z.lazy(() => tblAdvanceOrderByRelationAggregateInputObjectSchema).optional(),
  dictCurrencies: z.lazy(() => dictCurrenciesOrderByWithRelationInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesOrderByWithRelationInputObjectSchema).optional(),
  dictLanguages: z.lazy(() => dictLanguagesOrderByWithRelationInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByWithRelationInputObjectSchema).optional(),
  dictCountries_old: z.lazy(() => dictCountries_oldOrderByWithRelationInputObjectSchema).optional(),
  tblAgrEvents: z.lazy(() => tblAgrEventsOrderByRelationAggregateInputObjectSchema).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsOrderByRelationAggregateInputObjectSchema).optional(),
  tblPubLocal: z.lazy(() => tblPubLocalOrderByRelationAggregateInputObjectSchema).optional(),
  tblRoyalty: z.lazy(() => tblRoyaltyOrderByRelationAggregateInputObjectSchema).optional(),
  tblRoyRates: z.lazy(() => tblRoyRatesOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const tblAgreementsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblAgreementsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsOrderByWithRelationInput>;
export const tblAgreementsOrderByWithRelationInputObjectZodSchema = makeSchema();
