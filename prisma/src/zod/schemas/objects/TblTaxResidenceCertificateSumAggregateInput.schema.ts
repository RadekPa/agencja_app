import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CertID: z.literal(true).optional(),
  ClientID: z.literal(true).optional(),
  CountryID: z.literal(true).optional()
}).strict();
export const TblTaxResidenceCertificateSumAggregateInputObjectSchema: z.ZodType<Prisma.TblTaxResidenceCertificateSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTaxResidenceCertificateSumAggregateInputType>;
export const TblTaxResidenceCertificateSumAggregateInputObjectZodSchema = makeSchema();
