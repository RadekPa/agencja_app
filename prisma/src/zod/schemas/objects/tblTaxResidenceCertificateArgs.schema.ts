import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTaxResidenceCertificateSelectObjectSchema as tblTaxResidenceCertificateSelectObjectSchema } from './tblTaxResidenceCertificateSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblTaxResidenceCertificateSelectObjectSchema).optional()
}).strict();
export const tblTaxResidenceCertificateArgsObjectSchema = makeSchema();
export const tblTaxResidenceCertificateArgsObjectZodSchema = makeSchema();
