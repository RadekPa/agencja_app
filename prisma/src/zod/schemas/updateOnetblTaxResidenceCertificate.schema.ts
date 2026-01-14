import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTaxResidenceCertificateSelectObjectSchema as tblTaxResidenceCertificateSelectObjectSchema } from './objects/tblTaxResidenceCertificateSelect.schema';
import { tblTaxResidenceCertificateUpdateInputObjectSchema as tblTaxResidenceCertificateUpdateInputObjectSchema } from './objects/tblTaxResidenceCertificateUpdateInput.schema';
import { tblTaxResidenceCertificateUncheckedUpdateInputObjectSchema as tblTaxResidenceCertificateUncheckedUpdateInputObjectSchema } from './objects/tblTaxResidenceCertificateUncheckedUpdateInput.schema';
import { tblTaxResidenceCertificateWhereUniqueInputObjectSchema as tblTaxResidenceCertificateWhereUniqueInputObjectSchema } from './objects/tblTaxResidenceCertificateWhereUniqueInput.schema';

export const tblTaxResidenceCertificateUpdateOneSchema: z.ZodType<Prisma.tblTaxResidenceCertificateUpdateArgs> = z.object({ select: tblTaxResidenceCertificateSelectObjectSchema.optional(),  data: z.union([tblTaxResidenceCertificateUpdateInputObjectSchema, tblTaxResidenceCertificateUncheckedUpdateInputObjectSchema]), where: tblTaxResidenceCertificateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateUpdateArgs>;

export const tblTaxResidenceCertificateUpdateOneZodSchema = z.object({ select: tblTaxResidenceCertificateSelectObjectSchema.optional(),  data: z.union([tblTaxResidenceCertificateUpdateInputObjectSchema, tblTaxResidenceCertificateUncheckedUpdateInputObjectSchema]), where: tblTaxResidenceCertificateWhereUniqueInputObjectSchema }).strict();