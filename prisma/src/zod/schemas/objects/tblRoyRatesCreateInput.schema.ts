import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateNestedOneWithoutTblRoyRatesInputObjectSchema as tblAgreementsCreateNestedOneWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsCreateNestedOneWithoutTblRoyRatesInput.schema';
import { tblAgrRightsCreateNestedOneWithoutTblRoyRatesInputObjectSchema as tblAgrRightsCreateNestedOneWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsCreateNestedOneWithoutTblRoyRatesInput.schema'

const makeSchema = () => z.object({
  Step: z.number().int(),
  CpsMax: z.number().int().optional().nullable(),
  Rate: z.number().optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedOneWithoutTblRoyRatesInputObjectSchema).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsCreateNestedOneWithoutTblRoyRatesInputObjectSchema)
}).strict();
export const tblRoyRatesCreateInputObjectSchema: z.ZodType<Prisma.tblRoyRatesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesCreateInput>;
export const tblRoyRatesCreateInputObjectZodSchema = makeSchema();
