import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateNestedOneWithoutTblRoyRatesInputObjectSchema as tblAgrRightsCreateNestedOneWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsCreateNestedOneWithoutTblRoyRatesInput.schema'

const makeSchema = () => z.object({
  Step: z.number().int(),
  CpsMax: z.number().int().optional().nullable(),
  Rate: z.number().optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsCreateNestedOneWithoutTblRoyRatesInputObjectSchema)
}).strict();
export const tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesCreateWithoutTblAgreementsInput>;
export const tblRoyRatesCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
