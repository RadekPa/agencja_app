import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTaxResidenceCertificateWhereInputObjectSchema as tblTaxResidenceCertificateWhereInputObjectSchema } from './objects/tblTaxResidenceCertificateWhereInput.schema';

export const tblTaxResidenceCertificateDeleteManySchema: z.ZodType<Prisma.tblTaxResidenceCertificateDeleteManyArgs> = z.object({ where: tblTaxResidenceCertificateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateDeleteManyArgs>;

export const tblTaxResidenceCertificateDeleteManyZodSchema = z.object({ where: tblTaxResidenceCertificateWhereInputObjectSchema.optional() }).strict();