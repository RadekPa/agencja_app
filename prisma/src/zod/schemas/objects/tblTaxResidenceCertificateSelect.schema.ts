import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CertID: z.boolean().optional(),
  ClientID: z.boolean().optional(),
  ValidDate: z.boolean().optional(),
  RequestDate: z.boolean().optional(),
  ReceiveDate: z.boolean().optional(),
  UpdateDate: z.boolean().optional(),
  HasCert: z.boolean().optional(),
  CountryID: z.boolean().optional(),
  CertFile: z.boolean().optional(),
  Remarks: z.boolean().optional()
}).strict();
export const tblTaxResidenceCertificateSelectObjectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateSelect>;
export const tblTaxResidenceCertificateSelectObjectZodSchema = makeSchema();
