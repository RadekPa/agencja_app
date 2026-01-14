import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CertID: z.literal(true).optional(),
  ClientID: z.literal(true).optional(),
  ValidDate: z.literal(true).optional(),
  RequestDate: z.literal(true).optional(),
  ReceiveDate: z.literal(true).optional(),
  UpdateDate: z.literal(true).optional(),
  HasCert: z.literal(true).optional(),
  CountryID: z.literal(true).optional(),
  CertFile: z.literal(true).optional(),
  Remarks: z.literal(true).optional()
}).strict();
export const TblTaxResidenceCertificateMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblTaxResidenceCertificateMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTaxResidenceCertificateMaxAggregateInputType>;
export const TblTaxResidenceCertificateMaxAggregateInputObjectZodSchema = makeSchema();
