import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CertID: SortOrderSchema.optional(),
  ClientID: SortOrderSchema.optional(),
  CountryID: SortOrderSchema.optional()
}).strict();
export const tblTaxResidenceCertificateSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTaxResidenceCertificateSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTaxResidenceCertificateSumOrderByAggregateInput>;
export const tblTaxResidenceCertificateSumOrderByAggregateInputObjectZodSchema = makeSchema();
