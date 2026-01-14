import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeCreateNestedManyWithoutTblAgrRightsInputObjectSchema as dictRoyTypeCreateNestedManyWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeCreateNestedManyWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInput.schema';
import { dictRightsFormCreateNestedOneWithoutTblAgrRightsInputObjectSchema as dictRightsFormCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormCreateNestedOneWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInput.schema';
import { dictPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema as dictPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeCreateNestedOneWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInput.schema';
import { tblRoyRatesCreateNestedManyWithoutTblAgrRightsInputObjectSchema as tblRoyRatesCreateNestedManyWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesCreateNestedManyWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  dictRoyType: z.lazy(() => dictRoyTypeCreateNestedManyWithoutTblAgrRightsInputObjectSchema).optional(),
  dictDistributionType: z.lazy(() => dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  dictRightsForm: z.lazy(() => dictRightsFormCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  dictRoyPriceType: z.lazy(() => dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  dictPriceType: z.lazy(() => dictPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  dictRoyAccountInterval: z.lazy(() => dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInputObjectSchema).optional(),
  tblRoyRates: z.lazy(() => tblRoyRatesCreateNestedManyWithoutTblAgrRightsInputObjectSchema).optional()
}).strict();
export const tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateWithoutTblAgreementsInput>;
export const tblAgrRightsCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
