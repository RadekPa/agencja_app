import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsArgsObjectSchema as tblAgreementsArgsObjectSchema } from './tblAgreementsArgs.schema';
import { tblAgrRightsArgsObjectSchema as tblAgrRightsArgsObjectSchema } from './tblAgrRightsArgs.schema'

const makeSchema = () => z.object({
  Step: z.boolean().optional(),
  AgrRightID: z.boolean().optional(),
  AgrID: z.boolean().optional(),
  CpsMax: z.boolean().optional(),
  Rate: z.boolean().optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsArgsObjectSchema)]).optional(),
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsArgsObjectSchema)]).optional()
}).strict();
export const tblRoyRatesSelectObjectSchema: z.ZodType<Prisma.tblRoyRatesSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesSelect>;
export const tblRoyRatesSelectObjectZodSchema = makeSchema();
