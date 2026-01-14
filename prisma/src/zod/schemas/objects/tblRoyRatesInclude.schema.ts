import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsArgsObjectSchema as tblAgreementsArgsObjectSchema } from './tblAgreementsArgs.schema';
import { tblAgrRightsArgsObjectSchema as tblAgrRightsArgsObjectSchema } from './tblAgrRightsArgs.schema'

const makeSchema = () => z.object({
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsArgsObjectSchema)]).optional(),
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsArgsObjectSchema)]).optional()
}).strict();
export const tblRoyRatesIncludeObjectSchema: z.ZodType<Prisma.tblRoyRatesInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesInclude>;
export const tblRoyRatesIncludeObjectZodSchema = makeSchema();
