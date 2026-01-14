import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CertID: SortOrderSchema.optional(),
  ClientID: SortOrderSchema.optional(),
  CountryID: SortOrderSchema.optional()
}).strict();
export const tblTaxResidenceCertificateAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateAvgOrderByAggregateInput>;
export const tblTaxResidenceCertificateAvgOrderByAggregateInputObjectZodSchema = makeSchema();
