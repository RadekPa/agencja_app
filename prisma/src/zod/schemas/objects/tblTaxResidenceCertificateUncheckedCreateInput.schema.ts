import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CertID: z.number().int().optional(),
  ClientID: z.number().int(),
  ValidDate: z.coerce.date(),
  RequestDate: z.coerce.date().optional().nullable(),
  ReceiveDate: z.coerce.date().optional().nullable(),
  UpdateDate: z.coerce.date(),
  HasCert: z.string().max(1),
  CountryID: z.number().int().optional().nullable(),
  CertFile: z.instanceof(Uint8Array).optional().nullable(),
  Remarks: z.string().max(300).optional().nullable()
}).strict();
export const tblTaxResidenceCertificateUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateUncheckedCreateInput>;
export const tblTaxResidenceCertificateUncheckedCreateInputObjectZodSchema = makeSchema();
