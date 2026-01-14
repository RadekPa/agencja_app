import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  CertID: SortOrderSchema.optional(),
  ClientID: SortOrderSchema.optional(),
  ValidDate: SortOrderSchema.optional(),
  RequestDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ReceiveDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UpdateDate: SortOrderSchema.optional(),
  HasCert: SortOrderSchema.optional(),
  CountryID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CertFile: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const tblTaxResidenceCertificateOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateOrderByWithRelationInput>;
export const tblTaxResidenceCertificateOrderByWithRelationInputObjectZodSchema = makeSchema();
