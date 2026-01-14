import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustomersIncludeObjectSchema as tblCustomersIncludeObjectSchema } from './objects/tblCustomersInclude.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './objects/tblCustomersOrderByWithRelationInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './objects/tblCustomersWhereInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './objects/tblCustomersWhereUniqueInput.schema';
import { TblCustomersScalarFieldEnumSchema } from './enums/TblCustomersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblCustomersFindFirstSelectSchema: z.ZodType<Prisma.tblCustomersSelect> = z.object({
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
    tblAgreements: z.boolean().optional(),
    tblClients_obsolete: z.boolean().optional(),
    tblCustBank: z.boolean().optional(),
    tblCustContacts: z.boolean().optional(),
    dictLanguages: z.boolean().optional(),
    dictStates: z.boolean().optional(),
    tblCustTypes: z.boolean().optional(),
    tblCustUsers: z.boolean().optional(),
    tblMailingLists: z.boolean().optional(),
    tblSeries: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblCustomersSelect>;

export const tblCustomersFindFirstSelectZodSchema = z.object({
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
    tblAgreements: z.boolean().optional(),
    tblClients_obsolete: z.boolean().optional(),
    tblCustBank: z.boolean().optional(),
    tblCustContacts: z.boolean().optional(),
    dictLanguages: z.boolean().optional(),
    dictStates: z.boolean().optional(),
    tblCustTypes: z.boolean().optional(),
    tblCustUsers: z.boolean().optional(),
    tblMailingLists: z.boolean().optional(),
    tblSeries: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tblCustomersFindFirstSchema: z.ZodType<Prisma.tblCustomersFindFirstArgs> = z.object({ select: tblCustomersFindFirstSelectSchema.optional(), include: z.lazy(() => tblCustomersIncludeObjectSchema.optional()), orderBy: z.union([tblCustomersOrderByWithRelationInputObjectSchema, tblCustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustomersWhereInputObjectSchema.optional(), cursor: tblCustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustomersScalarFieldEnumSchema, TblCustomersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustomersFindFirstArgs>;

export const tblCustomersFindFirstZodSchema = z.object({ select: tblCustomersFindFirstSelectSchema.optional(), include: z.lazy(() => tblCustomersIncludeObjectSchema.optional()), orderBy: z.union([tblCustomersOrderByWithRelationInputObjectSchema, tblCustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustomersWhereInputObjectSchema.optional(), cursor: tblCustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustomersScalarFieldEnumSchema, TblCustomersScalarFieldEnumSchema.array()]).optional() }).strict();