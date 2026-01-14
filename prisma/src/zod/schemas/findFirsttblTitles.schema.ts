import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesIncludeObjectSchema as tblTitlesIncludeObjectSchema } from './objects/tblTitlesInclude.schema';
import { tblTitlesOrderByWithRelationInputObjectSchema as tblTitlesOrderByWithRelationInputObjectSchema } from './objects/tblTitlesOrderByWithRelationInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './objects/tblTitlesWhereInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './objects/tblTitlesWhereUniqueInput.schema';
import { TblTitlesScalarFieldEnumSchema } from './enums/TblTitlesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblTitlesFindFirstSelectSchema: z.ZodType<Prisma.tblTitlesSelect> = z.object({
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
    tblAgreements: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    tblTitAuthors: z.boolean().optional(),
    tblTitAux: z.boolean().optional(),
    tblTitEvents: z.boolean().optional(),
    dictLanguages: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    dictTitMainClass: z.boolean().optional(),
    dictCoverFormat: z.boolean().optional(),
    tblTitSubClass: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblTitlesSelect>;

export const tblTitlesFindFirstSelectZodSchema = z.object({
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
    tblAgreements: z.boolean().optional(),
    tblSubmissions: z.boolean().optional(),
    tblTitAuthors: z.boolean().optional(),
    tblTitAux: z.boolean().optional(),
    tblTitEvents: z.boolean().optional(),
    dictLanguages: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    dictTitMainClass: z.boolean().optional(),
    dictCoverFormat: z.boolean().optional(),
    tblTitSubClass: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tblTitlesFindFirstSchema: z.ZodType<Prisma.tblTitlesFindFirstArgs> = z.object({ select: tblTitlesFindFirstSelectSchema.optional(), include: z.lazy(() => tblTitlesIncludeObjectSchema.optional()), orderBy: z.union([tblTitlesOrderByWithRelationInputObjectSchema, tblTitlesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitlesWhereInputObjectSchema.optional(), cursor: tblTitlesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitlesScalarFieldEnumSchema, TblTitlesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitlesFindFirstArgs>;

export const tblTitlesFindFirstZodSchema = z.object({ select: tblTitlesFindFirstSelectSchema.optional(), include: z.lazy(() => tblTitlesIncludeObjectSchema.optional()), orderBy: z.union([tblTitlesOrderByWithRelationInputObjectSchema, tblTitlesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitlesWhereInputObjectSchema.optional(), cursor: tblTitlesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTitlesScalarFieldEnumSchema, TblTitlesScalarFieldEnumSchema.array()]).optional() }).strict();