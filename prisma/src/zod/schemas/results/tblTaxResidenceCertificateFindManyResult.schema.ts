import * as z from 'zod';
export const tblTaxResidenceCertificateFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});