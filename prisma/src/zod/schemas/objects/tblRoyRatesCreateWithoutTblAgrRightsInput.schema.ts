import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateNestedOneWithoutTblRoyRatesInputObjectSchema as tblAgreementsCreateNestedOneWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsCreateNestedOneWithoutTblRoyRatesInput.schema'

const makeSchema = () => z.object({
  Step: z.number().int(),
  CpsMax: z.number().int().optional().nullable(),
  Rate: z.number().optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedOneWithoutTblRoyRatesInputObjectSchema).optional()
}).strict();
export const tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesCreateWithoutTblAgrRightsInput>;
export const tblRoyRatesCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
