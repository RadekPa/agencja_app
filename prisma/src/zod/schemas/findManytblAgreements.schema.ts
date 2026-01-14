import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgreementsIncludeObjectSchema as tblAgreementsIncludeObjectSchema } from './objects/tblAgreementsInclude.schema';
import { tblAgreementsOrderByWithRelationInputObjectSchema as tblAgreementsOrderByWithRelationInputObjectSchema } from './objects/tblAgreementsOrderByWithRelationInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './objects/tblAgreementsWhereInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './objects/tblAgreementsWhereUniqueInput.schema';
import { TblAgreementsScalarFieldEnumSchema } from './enums/TblAgreementsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblAgreementsFindManySelectSchema: z.ZodType<Prisma.tblAgreementsSelect> = z.object({
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
    tblAdvance: z.boolean().optional(),
    dictCurrencies: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    dictLanguages: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    dictCountries_old: z.boolean().optional(),
    tblAgrEvents: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    tblPubLocal: z.boolean().optional(),
    tblRoyalty: z.boolean().optional(),
    tblRoyRates: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblAgreementsSelect>;

export const tblAgreementsFindManySelectZodSchema = z.object({
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
    tblAdvance: z.boolean().optional(),
    dictCurrencies: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    dictLanguages: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    dictCountries_old: z.boolean().optional(),
    tblAgrEvents: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    tblPubLocal: z.boolean().optional(),
    tblRoyalty: z.boolean().optional(),
    tblRoyRates: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tblAgreementsFindManySchema: z.ZodType<Prisma.tblAgreementsFindManyArgs> = z.object({ select: tblAgreementsFindManySelectSchema.optional(), include: z.lazy(() => tblAgreementsIncludeObjectSchema.optional()), orderBy: z.union([tblAgreementsOrderByWithRelationInputObjectSchema, tblAgreementsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgreementsWhereInputObjectSchema.optional(), cursor: tblAgreementsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblAgreementsScalarFieldEnumSchema, TblAgreementsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblAgreementsFindManyArgs>;

export const tblAgreementsFindManyZodSchema = z.object({ select: tblAgreementsFindManySelectSchema.optional(), include: z.lazy(() => tblAgreementsIncludeObjectSchema.optional()), orderBy: z.union([tblAgreementsOrderByWithRelationInputObjectSchema, tblAgreementsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgreementsWhereInputObjectSchema.optional(), cursor: tblAgreementsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblAgreementsScalarFieldEnumSchema, TblAgreementsScalarFieldEnumSchema.array()]).optional() }).strict();