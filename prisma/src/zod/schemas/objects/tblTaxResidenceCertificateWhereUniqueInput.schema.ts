import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CertID: z.number().int().optional()
}).strict();
export const tblTaxResidenceCertificateWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateWhereUniqueInput>;
export const tblTaxResidenceCertificateWhereUniqueInputObjectZodSchema = makeSchema();
