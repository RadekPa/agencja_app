import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CertID: SortOrderSchema.optional(),
  ClientID: SortOrderSchema.optional(),
  ValidDate: SortOrderSchema.optional(),
  RequestDate: SortOrderSchema.optional(),
  ReceiveDate: SortOrderSchema.optional(),
  UpdateDate: SortOrderSchema.optional(),
  HasCert: SortOrderSchema.optional(),
  CountryID: SortOrderSchema.optional(),
  CertFile: SortOrderSchema.optional(),
  Remarks: SortOrderSchema.optional()
}).strict();
export const tblTaxResidenceCertificateMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateMaxOrderByAggregateInput>;
export const tblTaxResidenceCertificateMaxOrderByAggregateInputObjectZodSchema = makeSchema();
