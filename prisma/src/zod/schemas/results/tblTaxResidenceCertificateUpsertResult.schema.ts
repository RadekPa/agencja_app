import * as z from 'zod';
export const tblTaxResidenceCertificateUpsertResultSchema = z.object({
  CertID: z.number().int(),
  ClientID: z.number().int(),
  ValidDate: z.date(),
  RequestDate: z.date().optional(),
  ReceiveDate: z.date().optional(),
  UpdateDate: z.date(),
  HasCert: z.string(),
  CountryID: z.number().int().optional(),
  CertFile: z.instanceof(Uint8Array).optional(),
  Remarks: z.string().optional()
});