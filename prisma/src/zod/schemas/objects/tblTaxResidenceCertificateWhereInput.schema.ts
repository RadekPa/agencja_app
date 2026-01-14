import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BytesNullableFilterObjectSchema as BytesNullableFilterObjectSchema } from './BytesNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const tbltaxresidencecertificatewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTaxResidenceCertificateWhereInputObjectSchema), z.lazy(() => tblTaxResidenceCertificateWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTaxResidenceCertificateWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTaxResidenceCertificateWhereInputObjectSchema), z.lazy(() => tblTaxResidenceCertificateWhereInputObjectSchema).array()]).optional(),
  CertID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ClientID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ValidDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  RequestDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  ReceiveDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  UpdateDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  HasCert: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(1)]).optional(),
  CountryID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CertFile: z.union([z.lazy(() => BytesNullableFilterObjectSchema), z.instanceof(Uint8Array)]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(300)]).optional().nullable()
}).strict();
export const tblTaxResidenceCertificateWhereInputObjectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateWhereInput> = tbltaxresidencecertificatewhereinputSchema as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateWhereInput>;
export const tblTaxResidenceCertificateWhereInputObjectZodSchema = tbltaxresidencecertificatewhereinputSchema;
