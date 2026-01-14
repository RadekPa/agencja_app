import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInput.schema';
import { tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  AgrRightID: z.number().int().optional(),
  AgrID: z.number().int().optional().nullable(),
  RightID: z.number().int().optional().nullable(),
  RoyPriceTypeID: z.number().int().optional().nullable(),
  RoyAccountIntervalID: z.number().int().optional().nullable(),
  DistID: z.number().int().optional().nullable(),
  dictRoyType: z.lazy(() => dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema).optional(),
  tblRoyRates: z.lazy(() => tblRoyRatesUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema).optional()
}).strict();
export const tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUncheckedCreateWithoutDictPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUncheckedCreateWithoutDictPriceTypeInput>;
export const tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectZodSchema = makeSchema();
