import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CertID: z.literal(true).optional(),
  ClientID: z.literal(true).optional(),
  CountryID: z.literal(true).optional()
}).strict();
export const TblTaxResidenceCertificateAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblTaxResidenceCertificateAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTaxResidenceCertificateAvgAggregateInputType>;
export const TblTaxResidenceCertificateAvgAggregateInputObjectZodSchema = makeSchema();
