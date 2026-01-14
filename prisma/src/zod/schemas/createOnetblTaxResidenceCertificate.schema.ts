import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTaxResidenceCertificateSelectObjectSchema as tblTaxResidenceCertificateSelectObjectSchema } from './objects/tblTaxResidenceCertificateSelect.schema';
import { tblTaxResidenceCertificateCreateInputObjectSchema as tblTaxResidenceCertificateCreateInputObjectSchema } from './objects/tblTaxResidenceCertificateCreateInput.schema';
import { tblTaxResidenceCertificateUncheckedCreateInputObjectSchema as tblTaxResidenceCertificateUncheckedCreateInputObjectSchema } from './objects/tblTaxResidenceCertificateUncheckedCreateInput.schema';

export const tblTaxResidenceCertificateCreateOneSchema: z.ZodType<Prisma.tblTaxResidenceCertificateCreateArgs> = z.object({ select: tblTaxResidenceCertificateSelectObjectSchema.optional(),  data: z.union([tblTaxResidenceCertificateCreateInputObjectSchema, tblTaxResidenceCertificateUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateCreateArgs>;

export const tblTaxResidenceCertificateCreateOneZodSchema = z.object({ select: tblTaxResidenceCertificateSelectObjectSchema.optional(),  data: z.union([tblTaxResidenceCertificateCreateInputObjectSchema, tblTaxResidenceCertificateUncheckedCreateInputObjectSchema]) }).strict();