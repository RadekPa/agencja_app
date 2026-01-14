import * as z from 'zod';
export const tblTaxResidenceCertificateGroupByResultSchema = z.array(z.object({
  CertID: z.number().int(),
  ClientID: z.number().int(),
  ValidDate: z.date(),
  RequestDate: z.date(),
  ReceiveDate: z.date(),
  UpdateDate: z.date(),
  HasCert: z.string(),
  CountryID: z.number().int(),
  CertFile: z.instanceof(Uint8Array),
  Remarks: z.string(),
  _count: z.object({
    CertID: z.number(),
    ClientID: z.number(),
    ValidDate: z.number(),
    RequestDate: z.number(),
    ReceiveDate: z.number(),
    UpdateDate: z.number(),
    HasCert: z.number(),
    CountryID: z.number(),
    CertFile: z.number(),
    Remarks: z.number()
  }).optional(),
  _sum: z.object({
    CertID: z.number().nullable(),
    ClientID: z.number().nullable(),
    CountryID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CertID: z.number().nullable(),
    ClientID: z.number().nullable(),
    CountryID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CertID: z.number().int().nullable(),
    ClientID: z.number().int().nullable(),
    ValidDate: z.date().nullable(),
    RequestDate: z.date().nullable(),
    ReceiveDate: z.date().nullable(),
    UpdateDate: z.date().nullable(),
    HasCert: z.string().nullable(),
    CountryID: z.number().int().nullable(),
    Remarks: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CertID: z.number().int().nullable(),
    ClientID: z.number().int().nullable(),
    ValidDate: z.date().nullable(),
    RequestDate: z.date().nullable(),
    ReceiveDate: z.date().nullable(),
    UpdateDate: z.date().nullable(),
    HasCert: z.string().nullable(),
    CountryID: z.number().int().nullable(),
    Remarks: z.string().nullable()
  }).nullable().optional()
}));