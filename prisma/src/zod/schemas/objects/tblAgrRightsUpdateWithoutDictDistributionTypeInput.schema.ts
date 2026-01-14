import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeUpdateManyWithoutTblAgrRightsNestedInputObjectSchema as dictRoyTypeUpdateManyWithoutTblAgrRightsNestedInputObjectSchema } from './dictRoyTypeUpdateManyWithoutTblAgrRightsNestedInput.schema';
import { tblAgreementsUpdateOneWithoutTblAgrRightsNestedInputObjectSchema as tblAgreementsUpdateOneWithoutTblAgrRightsNestedInputObjectSchema } from './tblAgreementsUpdateOneWithoutTblAgrRightsNestedInput.schema';
import { dictRightsFormUpdateOneWithoutTblAgrRightsNestedInputObjectSchema as dictRightsFormUpdateOneWithoutTblAgrRightsNestedInputObjectSchema } from './dictRightsFormUpdateOneWithoutTblAgrRightsNestedInput.schema';
import { dictRoyPriceTypeUpdateOneWithoutTblAgrRightsNestedInputObjectSchema as dictRoyPriceTypeUpdateOneWithoutTblAgrRightsNestedInputObjectSchema } from './dictRoyPriceTypeUpdateOneWithoutTblAgrRightsNestedInput.schema';
import { dictPriceTypeUpdateOneWithoutTblAgrRightsNestedInputObjectSchema as dictPriceTypeUpdateOneWithoutTblAgrRightsNestedInputObjectSchema } from './dictPriceTypeUpdateOneWithoutTblAgrRightsNestedInput.schema';
import { dictRoyAccountIntervalUpdateOneWithoutTblAgrRightsNestedInputObjectSchema as dictRoyAccountIntervalUpdateOneWithoutTblAgrRightsNestedInputObjectSchema } from './dictRoyAccountIntervalUpdateOneWithoutTblAgrRightsNestedInput.schema';
import { tblRoyRatesUpdateManyWithoutTblAgrRightsNestedInputObjectSchema as tblRoyRatesUpdateManyWithoutTblAgrRightsNestedInputObjectSchema } from './tblRoyRatesUpdateManyWithoutTblAgrRightsNestedInput.schema'

const makeSchema = () => z.object({
  dictRoyType: z.lazy(() => dictRoyTypeUpdateManyWithoutTblAgrRightsNestedInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUpdateOneWithoutTblAgrRightsNestedInputObjectSchema).optional(),
  dictRightsForm: z.lazy(() => dictRightsFormUpdateOneWithoutTblAgrRightsNestedInputObjectSchema).optional(),
  dictRoyPriceType: z.lazy(() => dictRoyPriceTypeUpdateOneWithoutTblAgrRightsNestedInputObjectSchema).optional(),
  dictPriceType: z.lazy(() => dictPriceTypeUpdateOneWithoutTblAgrRightsNestedInputObjectSchema).optional(),
  dictRoyAccountInterval: z.lazy(() => dictRoyAccountIntervalUpdateOneWithoutTblAgrRightsNestedInputObjectSchema).optional(),
  tblRoyRates: z.lazy(() => tblRoyRatesUpdateManyWithoutTblAgrRightsNestedInputObjectSchema).optional()
}).strict();
export const tblAgrRightsUpdateWithoutDictDistributionTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateWithoutDictDistributionTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateWithoutDictDistributionTypeInput>;
export const tblAgrRightsUpdateWithoutDictDistributionTypeInputObjectZodSchema = makeSchema();
