import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  AgrRightID: z.number().int().optional(),
  AgrID: z.number().int().optional().nullable(),
  RightID: z.number().int().optional().nullable(),
  PriceTypeID: z.number().int().optional().nullable(),
  RoyPriceTypeID: z.number().int().optional().nullable(),
  RoyAccountIntervalID: z.number().int().optional().nullable(),
  DistID: z.number().int().optional().nullable(),
  dictRoyType: z.lazy(() => dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema).optional()
}).strict();
export const tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUncheckedCreateWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUncheckedCreateWithoutTblRoyRatesInput>;
export const tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
