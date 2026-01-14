import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTaxResidenceCertificateOrderByWithRelationInputObjectSchema as tblTaxResidenceCertificateOrderByWithRelationInputObjectSchema } from './objects/tblTaxResidenceCertificateOrderByWithRelationInput.schema';
import { tblTaxResidenceCertificateWhereInputObjectSchema as tblTaxResidenceCertificateWhereInputObjectSchema } from './objects/tblTaxResidenceCertificateWhereInput.schema';
import { tblTaxResidenceCertificateWhereUniqueInputObjectSchema as tblTaxResidenceCertificateWhereUniqueInputObjectSchema } from './objects/tblTaxResidenceCertificateWhereUniqueInput.schema';
import { TblTaxResidenceCertificateScalarFieldEnumSchema } from './enums/TblTaxResidenceCertificateScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblTaxResidenceCertificateFindManySelectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateSelect> = z.object({
    CertID: z.boolean().optional(),
    ClientID: z.boolean().optional(),
    ValidDate: z.boolean().optional(),
    RequestDate: z.boolean().optional(),
    ReceiveDate: z.boolean().optional(),
    UpdateDate: z.boolean().optional(),
    HasCert: z.boolean().optional(),
    CountryID: z.boolean().optional(),
    CertFile: z.boolean().optional(),
    Remarks: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateSelect>;

export const tblTaxResidenceCertificateFindManySelectZodSchema = z.object({
    CertID: z.boolean().optional(),
    ClientID: z.boolean().optional(),
    ValidDate: z.boolean().optional(),
    RequestDate: z.boolean().optional(),
    ReceiveDate: z.boolean().optional(),
    UpdateDate: z.boolean().optional(),
    HasCert: z.boolean().optional(),
    CountryID: z.boolean().optional(),
    CertFile: z.boolean().optional(),
    Remarks: z.boolean().optional()
  }).strict();

export const tblTaxResidenceCertificateFindManySchema: z.ZodType<Prisma.tblTaxResidenceCertificateFindManyArgs> = z.object({ select: tblTaxResidenceCertificateFindManySelectSchema.optional(),  orderBy: z.union([tblTaxResidenceCertificateOrderByWithRelationInputObjectSchema, tblTaxResidenceCertificateOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTaxResidenceCertificateWhereInputObjectSchema.optional(), cursor: tblTaxResidenceCertificateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTaxResidenceCertificateScalarFieldEnumSchema, TblTaxResidenceCertificateScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateFindManyArgs>;

export const tblTaxResidenceCertificateFindManyZodSchema = z.object({ select: tblTaxResidenceCertificateFindManySelectSchema.optional(),  orderBy: z.union([tblTaxResidenceCertificateOrderByWithRelationInputObjectSchema, tblTaxResidenceCertificateOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTaxResidenceCertificateWhereInputObjectSchema.optional(), cursor: tblTaxResidenceCertificateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblTaxResidenceCertificateScalarFieldEnumSchema, TblTaxResidenceCertificateScalarFieldEnumSchema.array()]).optional() }).strict();