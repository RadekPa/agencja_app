import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAdvanceFindManySchema as tblAdvanceFindManySchema } from '../findManytblAdvance.schema';
import { dictCurrenciesArgsObjectSchema as dictCurrenciesArgsObjectSchema } from './dictCurrenciesArgs.schema';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema';
import { dictLanguagesArgsObjectSchema as dictLanguagesArgsObjectSchema } from './dictLanguagesArgs.schema';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema';
import { dictCountries_oldArgsObjectSchema as dictCountries_oldArgsObjectSchema } from './dictCountries_oldArgs.schema';
import { tblAgrEventsFindManySchema as tblAgrEventsFindManySchema } from '../findManytblAgrEvents.schema';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { tblPubLocalFindManySchema as tblPubLocalFindManySchema } from '../findManytblPubLocal.schema';
import { tblRoyaltyFindManySchema as tblRoyaltyFindManySchema } from '../findManytblRoyalty.schema';
import { tblRoyRatesFindManySchema as tblRoyRatesFindManySchema } from '../findManytblRoyRates.schema';
import { TblAgreementsCountOutputTypeArgsObjectSchema as TblAgreementsCountOutputTypeArgsObjectSchema } from './TblAgreementsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  AgrID: z.boolean().optional(),
  CustID: z.boolean().optional(),
  CountryID: z.boolean().optional(),
  LangAbbr: z.boolean().optional(),
  TitleID: z.boolean().optional(),
  CurrID: z.boolean().optional(),
  AgrDate: z.boolean().optional(),
  ValidYY: z.boolean().optional(),
  PubTermMM: z.boolean().optional(),
  MaxNoOfCopies: z.boolean().optional(),
  MinNoOfCopies: z.boolean().optional(),
  Commission: z.boolean().optional(),
  ClientReference: z.boolean().optional(),
  DateMod: z.boolean().optional(),
  UserMod: z.boolean().optional(),
  GraalAgentID: z.boolean().optional(),
  GraalShare: z.boolean().optional(),
  EstimatedCopyPrice: z.boolean().optional(),
  GraalRepresent: z.boolean().optional(),
  Remarks: z.boolean().optional(),
  AgrDoc: z.boolean().optional(),
  Status: z.boolean().optional(),
  CopiesToOwner: z.boolean().optional(),
  CopiesToGraal: z.boolean().optional(),
  LocalTitle: z.boolean().optional(),
  LocalISBN: z.boolean().optional(),
  LocalPubDate: z.boolean().optional(),
  ClientID: z.boolean().optional(),
  CommissionMaterials: z.boolean().optional(),
  AgentID: z.boolean().optional(),
  PropID: z.boolean().optional(),
  tblAdvance: z.union([z.boolean(), z.lazy(() => tblAdvanceFindManySchema)]).optional(),
  dictCurrencies: z.union([z.boolean(), z.lazy(() => dictCurrenciesArgsObjectSchema)]).optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional(),
  dictLanguages: z.union([z.boolean(), z.lazy(() => dictLanguagesArgsObjectSchema)]).optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional(),
  dictCountries_old: z.union([z.boolean(), z.lazy(() => dictCountries_oldArgsObjectSchema)]).optional(),
  tblAgrEvents: z.union([z.boolean(), z.lazy(() => tblAgrEventsFindManySchema)]).optional(),
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  tblPubLocal: z.union([z.boolean(), z.lazy(() => tblPubLocalFindManySchema)]).optional(),
  tblRoyalty: z.union([z.boolean(), z.lazy(() => tblRoyaltyFindManySchema)]).optional(),
  tblRoyRates: z.union([z.boolean(), z.lazy(() => tblRoyRatesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblAgreementsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblAgreementsSelectObjectSchema: z.ZodType<Prisma.tblAgreementsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsSelect>;
export const tblAgreementsSelectObjectZodSchema = makeSchema();
