import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInput.schema';
import { tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  AgrRightID: z.number().int().optional(),
  RightID: z.number().int().optional().nullable(),
  PriceTypeID: z.number().int().optional().nullable(),
  RoyPriceTypeID: z.number().int().optional().nullable(),
  RoyAccountIntervalID: z.number().int().optional().nullable(),
  DistID: z.number().int().optional().nullable(),
  dictRoyType: z.lazy(() => dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema).optional(),
  tblRoyRates: z.lazy(() => tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema).optional()
}).strict();
export const tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUncheckedCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUncheckedCreateWithoutTblAgreementsInput>;
export const tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
