import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTaxResidenceCertificateSelectObjectSchema as tblTaxResidenceCertificateSelectObjectSchema } from './objects/tblTaxResidenceCertificateSelect.schema';
import { tblTaxResidenceCertificateWhereUniqueInputObjectSchema as tblTaxResidenceCertificateWhereUniqueInputObjectSchema } from './objects/tblTaxResidenceCertificateWhereUniqueInput.schema';

export const tblTaxResidenceCertificateFindUniqueOrThrowSchema: z.ZodType<Prisma.tblTaxResidenceCertificateFindUniqueOrThrowArgs> = z.object({ select: tblTaxResidenceCertificateSelectObjectSchema.optional(),  where: tblTaxResidenceCertificateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateFindUniqueOrThrowArgs>;

export const tblTaxResidenceCertificateFindUniqueOrThrowZodSchema = z.object({ select: tblTaxResidenceCertificateSelectObjectSchema.optional(),  where: tblTaxResidenceCertificateWhereUniqueInputObjectSchema }).strict();