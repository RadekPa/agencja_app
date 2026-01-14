import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { BytesNullableWithAggregatesFilterObjectSchema as BytesNullableWithAggregatesFilterObjectSchema } from './BytesNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const tbltaxresidencecertificatescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTaxResidenceCertificateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTaxResidenceCertificateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTaxResidenceCertificateScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTaxResidenceCertificateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblTaxResidenceCertificateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CertID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  ClientID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  ValidDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  RequestDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  ReceiveDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  UpdateDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  HasCert: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(1)]).optional(),
  CountryID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  CertFile: z.union([z.lazy(() => BytesNullableWithAggregatesFilterObjectSchema), z.instanceof(Uint8Array)]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(300)]).optional().nullable()
}).strict();
export const tblTaxResidenceCertificateScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateScalarWhereWithAggregatesInput> = tbltaxresidencecertificatescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateScalarWhereWithAggregatesInput>;
export const tblTaxResidenceCertificateScalarWhereWithAggregatesInputObjectZodSchema = tbltaxresidencecertificatescalarwherewithaggregatesinputSchema;
