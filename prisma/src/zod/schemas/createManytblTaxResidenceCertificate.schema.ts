import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTaxResidenceCertificateCreateManyInputObjectSchema as tblTaxResidenceCertificateCreateManyInputObjectSchema } from './objects/tblTaxResidenceCertificateCreateManyInput.schema';

export const tblTaxResidenceCertificateCreateManySchema: z.ZodType<Prisma.tblTaxResidenceCertificateCreateManyArgs> = z.object({ data: z.union([ tblTaxResidenceCertificateCreateManyInputObjectSchema, z.array(tblTaxResidenceCertificateCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateCreateManyArgs>;

export const tblTaxResidenceCertificateCreateManyZodSchema = z.object({ data: z.union([ tblTaxResidenceCertificateCreateManyInputObjectSchema, z.array(tblTaxResidenceCertificateCreateManyInputObjectSchema) ]),  }).strict();