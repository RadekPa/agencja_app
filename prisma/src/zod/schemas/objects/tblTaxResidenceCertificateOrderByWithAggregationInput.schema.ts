import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblTaxResidenceCertificateCountOrderByAggregateInputObjectSchema as tblTaxResidenceCertificateCountOrderByAggregateInputObjectSchema } from './tblTaxResidenceCertificateCountOrderByAggregateInput.schema';
import { tblTaxResidenceCertificateAvgOrderByAggregateInputObjectSchema as tblTaxResidenceCertificateAvgOrderByAggregateInputObjectSchema } from './tblTaxResidenceCertificateAvgOrderByAggregateInput.schema';
import { tblTaxResidenceCertificateMaxOrderByAggregateInputObjectSchema as tblTaxResidenceCertificateMaxOrderByAggregateInputObjectSchema } from './tblTaxResidenceCertificateMaxOrderByAggregateInput.schema';
import { tblTaxResidenceCertificateMinOrderByAggregateInputObjectSchema as tblTaxResidenceCertificateMinOrderByAggregateInputObjectSchema } from './tblTaxResidenceCertificateMinOrderByAggregateInput.schema';
import { tblTaxResidenceCertificateSumOrderByAggregateInputObjectSchema as tblTaxResidenceCertificateSumOrderByAggregateInputObjectSchema } from './tblTaxResidenceCertificateSumOrderByAggregateInput.schema'

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
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblTaxResidenceCertificateCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblTaxResidenceCertificateAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblTaxResidenceCertificateMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblTaxResidenceCertificateMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblTaxResidenceCertificateSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblTaxResidenceCertificateOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateOrderByWithAggregationInput>;
export const tblTaxResidenceCertificateOrderByWithAggregationInputObjectZodSchema = makeSchema();
