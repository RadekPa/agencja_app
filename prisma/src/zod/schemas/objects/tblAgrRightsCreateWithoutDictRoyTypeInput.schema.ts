import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateNestedOneWithoutTblAgrRightsInputObjectSchema as tblAgreementsCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsCreateNestedOneWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInput.schema';
import { dictRightsFormCreateNestedOneWithoutTblAgrRightsInputObjectSchema as dictRightsFormCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormCreateNestedOneWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInput.schema';
import { dictPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema as dictPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeCreateNestedOneWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInput.schema';
import { tblRoyRatesCreateNestedManyWithoutTblAgrRightsInputObjectSchema as tblRoyRatesCreateNestedManyWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesCreateNestedManyWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  dictDistributionType: z.lazy(() => dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  dictRightsForm: z.lazy(() => dictRightsFormCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  dictRoyPriceType: z.lazy(() => dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  dictPriceType: z.lazy(() => dictPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  dictRoyAccountInterval: z.lazy(() => dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  tblRoyRates: z.lazy(() => tblRoyRatesCreateNestedManyWithoutTblAgrRightsInputObjectSchema).optional()
}).strict();
export const tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateWithoutDictRoyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateWithoutDictRoyTypeInput>;
export const tblAgrRightsCreateWithoutDictRoyTypeInputObjectZodSchema = makeSchema();
