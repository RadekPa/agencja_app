import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTaxResidenceCertificateUpdateManyMutationInputObjectSchema as tblTaxResidenceCertificateUpdateManyMutationInputObjectSchema } from './objects/tblTaxResidenceCertificateUpdateManyMutationInput.schema';
import { tblTaxResidenceCertificateWhereInputObjectSchema as tblTaxResidenceCertificateWhereInputObjectSchema } from './objects/tblTaxResidenceCertificateWhereInput.schema';

export const tblTaxResidenceCertificateUpdateManySchema: z.ZodType<Prisma.tblTaxResidenceCertificateUpdateManyArgs> = z.object({ data: tblTaxResidenceCertificateUpdateManyMutationInputObjectSchema, where: tblTaxResidenceCertificateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateUpdateManyArgs>;

export const tblTaxResidenceCertificateUpdateManyZodSchema = z.object({ data: tblTaxResidenceCertificateUpdateManyMutationInputObjectSchema, where: tblTaxResidenceCertificateWhereInputObjectSchema.optional() }).strict();