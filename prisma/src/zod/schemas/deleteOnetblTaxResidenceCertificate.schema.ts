import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTaxResidenceCertificateSelectObjectSchema as tblTaxResidenceCertificateSelectObjectSchema } from './objects/tblTaxResidenceCertificateSelect.schema';
import { tblTaxResidenceCertificateWhereUniqueInputObjectSchema as tblTaxResidenceCertificateWhereUniqueInputObjectSchema } from './objects/tblTaxResidenceCertificateWhereUniqueInput.schema';

export const tblTaxResidenceCertificateDeleteOneSchema: z.ZodType<Prisma.tblTaxResidenceCertificateDeleteArgs> = z.object({ select: tblTaxResidenceCertificateSelectObjectSchema.optional(),  where: tblTaxResidenceCertificateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateDeleteArgs>;

export const tblTaxResidenceCertificateDeleteOneZodSchema = z.object({ select: tblTaxResidenceCertificateSelectObjectSchema.optional(),  where: tblTaxResidenceCertificateWhereUniqueInputObjectSchema }).strict();